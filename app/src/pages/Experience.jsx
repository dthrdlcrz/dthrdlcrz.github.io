import { useRef } from 'react'
import useInView from '../hooks/useInView'
import { experiences } from '../configs/portfolioData'
import styles from './Experience.module.css'

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
