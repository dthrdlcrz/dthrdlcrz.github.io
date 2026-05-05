import { useRef } from 'react'
import useInView from '../hooks/useInView'
import styles from './Experience.module.css'

const experiences = [
  {
    period: 'May 2024 – Present',
    company: 'PowerSolv Incorporated',
    title: 'Lead Software Developer',
        desc: 'Leading the full migration of legacy C++ software to modern C# architecture in Visual Studio. Implemented Jira and Bitbucket for task management and version control, introduced Agile/Scrum standups, and maintain VB.NET/ASP.NET WebForms applications. Also mentoring junior developers and handling technical support for end-users.',
    tags: ['C# / .NET', 'ASP.NET WebForms', 'VB.NET', 'MS SQL', 'Jira', 'Bitbucket', 'Agile / Scrum', 'Team Leadership'],
  },
  {
    period: 'Oct 2023 – May 2024',
    company: 'PowerSolv Incorporated',
    title: 'Junior Software Developer',
    desc: 'Designed and developed power system applications using C++ and Embarcadero RAD Studio. Sole developer on a full modernization of a legacy web-based app using VB.NET, ASP.NET, and MS SQL — refactored core logic from single-threaded to multi-threaded, delivering significantly faster performance and a cleaner user experience.',
    tags: ['C++', 'ASP.NET', 'VB.NET', 'MS SQL', 'Embarcadero IDE'],
  },
]

function ExpItem({ exp, index }) {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.itemVisible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.meta}>
        <div className={styles.period}>{exp.period}</div>
        <div className={styles.company}>{exp.company}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{exp.title}</div>
        <p className={styles.desc}>{exp.desc}</p>
        <div className={styles.tags}>
          {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've worked</h2>
        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <ExpItem key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
