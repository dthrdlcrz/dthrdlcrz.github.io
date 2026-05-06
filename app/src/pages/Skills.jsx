import { useRef } from 'react'
import useInView from '../hooks/useInView'
import { skillGroups } from '../configs/portfolioData'
import styles from './Skills.module.css'

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
