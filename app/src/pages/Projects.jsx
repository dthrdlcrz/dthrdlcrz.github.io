import { useRef } from 'react'
import useInView from '../hooks/useInView'
import { projects } from '../configs/portfolioData'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className={styles.num}>{project.num}</div>
      <div className={styles.name}>{project.name}</div>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.techs}>
        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {project.private ? (
        <span className={styles.privateBadge}>⚿ Private / Company Project</span>
      ) : (
        <a href={project.link} className={styles.link} target="_blank" rel="noreferrer">
          GitHub →
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">What I've built</h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
