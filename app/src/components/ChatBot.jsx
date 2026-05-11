import { useState, useRef, useEffect } from 'react'
import styles from './ChatBot.module.css'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Diether — Lead Software Developer & Automation Developer. Feel free to ask me about my experience, projects, skills, or anything else!" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const data = await response.json()
      if (data.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Chat Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having some connection issues right now. Please try again or reach me directly at diethergdelacruz@gmail.com!" }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.title}>Diether<span className={styles.aiTag}>AI</span></div>
            <button className={styles.close} onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className={styles.messages} ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                <div className={styles.bubble}>{msg.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.assistant}`}>
                <div className={`${styles.bubble} ${styles.typing}`}>...</div>
              </div>
            )}
          </div>
          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}
      <button 
        className={`${styles.trigger} ${isOpen ? styles.hidden : ''}`} 
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  )
}
