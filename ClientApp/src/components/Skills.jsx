import { useRef } from 'react'
import useInView from '../hooks/useInView'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Languages',
    items: ['C# / .NET Framework', 'C / C++', 'VB.NET', 'Java', 'Python', 'PHP'],
  },
  {
    title: 'Web Development',
    items: ['ASP.NET / WebForms', 'HTML / CSS / Bootstrap', 'JavaScript / jQuery', 'React', 'Node.js / Express.js'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Microsoft Visual Studio', 'Embarcadero RAD Studio', 'Jira / Bitbucket / GitHub', 'MS SQL / MySQL'],
  },
  {
    title: 'Concepts',
    items: ['UiPath UI Automation', 'OOP & Design Patterns', 'Agile / Scrum', 'API Integration', 'Team Leadership'],
  },
]

function SkillGroup({ group, index }) {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`${styles.group} ${inView ? styles.groupVisible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.groupTitle}>{group.title}</div>
      <div className={styles.list}>
        {group.items.map(item => (
          <span key={item} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">What I work with</h2>
        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
