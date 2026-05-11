import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  aboutText, aboutInfo,
  experiences, projects, skillGroups,
  certGroups, contactLinks
} from '../src/configs/portfolioData.js';

const apiKey = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const MODELS = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash-lite',
  'gemini-flash-latest',
]

const portfolioContext = `
TODAY'S DATE: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
CURRENT YEAR: ${new Date().getFullYear()}
CURRENT MONTH: ${new Date().toLocaleDateString('en-US', { month: 'long' })}
IMPORTANT: Always use TODAY'S DATE above for any duration or time calculations. Never assume or guess the current date. The current year is ${new Date().getFullYear()}.

EMPLOYMENT DURATION (pre-calculated, do not recalculate):
- At PowerSolv total: ${Math.floor((new Date() - new Date('2023-10-01')) / (1000 * 60 * 60 * 24 * 365.25))} years and ${Math.floor(((new Date() - new Date('2023-10-01')) / (1000 * 60 * 60 * 24 * 30.44)) % 12)} months
- As Junior Software Developer: 7 months (October 2023 - May 2024)
- As Lead Software Developer: ${Math.floor((new Date() - new Date('2024-05-01')) / (1000 * 60 * 60 * 24 * 30.44))} months (May 2024 - Present)

ABOUT: ${aboutText.join(' ')}

INFO: ${aboutInfo.map(i => `${i.label}: ${i.value}`).join(', ')}

EXPERIENCE:
${experiences.map(e => `- ${e.title} at ${e.company} (${e.period}): ${e.desc}`).join('\n')}

PROJECTS:
${projects.map(p => `- ${p.name}: ${p.desc} | Stack: ${p.tags.join(', ')}`).join('\n')}

SKILLS:
${skillGroups.map(g => `${g.title}: ${g.items.join(', ')}`).join('\n')}

CERTIFICATIONS:
${certGroups.map(g => `${g.title}: ${g.items.map(i => i.name).join(', ')}`).join('\n')}

CONTACT:
${contactLinks.map(c => `${c.type}: ${c.href}`).join('\n')}
`;

const systemInstruction = `You are Diether Garcia Dela Cruz speaking directly to visitors of your portfolio website.

PERSONA:
- Respond in first person — always use "I", "my", "me". Never refer to yourself as "Diether" in third person.
- Be confident, friendly, and professional but conversational.
- Keep answers concise and clear — avoid long paragraphs.
- Show enthusiasm when talking about your work and projects.

RULES:
- If asked about contact info (email, phone, LinkedIn, GitHub), share it directly and openly.
- If asked questions unrelated to your professional profile (math, general knowledge, current events, etc.), politely redirect: "That's interesting, but I'm better at talking about my work! Feel free to ask me about my projects, skills, or experience."
- Never make up information not in your portfolio data.
- If asked if you are an AI, be honest — say you are an AI version of Diether built to answer questions about his portfolio.
- Do not use markdown formatting like **bold** or *italic* in responses — keep it plain text.
- When asked about duration at a company, use the exact dates provided in the experience data. Calculate from the start date to today's date. Do not guess or approximate loosely.
- If the person no longer works somewhere, only state the dates provided. Never assume they are still there unless the end date says "Present".

${portfolioContext}`

async function getModelResponse(validHistory, lastMessage) {
  for (const modelName of MODELS) {
    try {
      console.log(`Trying model: ${modelName}`)
      const model = genAI.getGenerativeModel({ model: modelName, systemInstruction })
      const chat = model.startChat({ history: validHistory })
      const result = await chat.sendMessage(lastMessage)
      const response = await result.response
      console.log(`Success with model: ${modelName}`)
      return response.text()
    } catch (error) {
      if (error.status === 429 || error.status === 404) {
        console.warn(`Model ${modelName} failed (${error.status}), trying next...`)
        continue
      }
      throw error
    }
  }
  throw new Error('All models exhausted. Please try again later.')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!apiKey) {
    console.error('ERROR: VITE_GEMINI_API_KEY is missing from environment variables.')
    return res.status(500).json({ error: 'API Key configuration error' })
  }

  const { messages } = req.body

  try {
    const fullHistory = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }))

    const lastMessage = fullHistory.pop().parts[0].text

    const firstUserIndex = fullHistory.findIndex(m => m.role === 'user')
    const validHistory = firstUserIndex !== -1 ? fullHistory.slice(firstUserIndex) : []

    const text = await getModelResponse(validHistory, lastMessage)
    res.status(200).json({ text })
  } catch (error) {
    console.error('Gemini API Error Detail:', error)
    res.status(500).json({ error: error.message || 'Failed to generate response' })
  }
}