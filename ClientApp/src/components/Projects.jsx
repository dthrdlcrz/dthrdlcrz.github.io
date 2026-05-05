import { useRef } from 'react'
import useInView from '../hooks/useInView'
import styles from './Projects.module.css'

const projects = [
    {
        num: '01',
        name: 'Distribution System Analysis Software (DSAS)',
        desc: 'Comprehensive power system analysis platform used by electric cooperatives and distribution utilities. Includes modules for load flow, loss segregation, reliability analysis, and short circuit studies. Maintained and enhanced the legacy codebase to ensure stability, improved computational accuracy, and delivered continuous patch updates for production deployments.',
        tags: ['C++', 'Embarcadero RAD Studio', 'Power Systems'],
        private: true,
    },
    {
        num: '02',
        name: 'Distribution Planning and Operations Software (DPOS)',
        desc: 'Next-generation platform built from the ground up to support advanced planning and operational analysis for distribution utilities. Designed to replace legacy systems with a scalable, maintainable architecture integrating multiple engineering analysis modules — including forecasting, simulation, and decision support.',
        tags: ['C++', 'Embarcadero RAD Studio', 'Power Systems'],
        private: true,
    },
    {
        num: '03',
        name: 'DSAS Web-Based System',
        desc: 'Sole developer on the full modernization of a legacy VB.NET and ASP.NET WebForms web-based application. Refactored outdated codebases, migrated and optimized legacy databases, and rebuilt the UI into a cleaner, more intuitive design. Converted core processing logic from single-threaded to multi-threaded execution, resulting in significantly improved speed and responsiveness.',
        tags: ['VB.NET', 'ASP.NET WebForms', 'MS SQL', 'Multi-threading'],
        private: true,
    },
    {
        num: '04',
        name: 'Legacy Software Migration (C++ to C#)',
        desc: 'Led the migration of DSAS and DPOS from legacy unmanaged C++ into modern managed C# architecture. Translated complex engineering logic while maintaining backward compatibility of core computational logic. Introduced multi-threading for performance gains, implemented an online patch update system, and improved overall maintainability, scalability, and developer productivity.',
        tags: ['C++', 'C#', '.NET', 'Multi-threading', 'Visual Studio'],
        private: true,
    },
    {
        num: '05',
        name: 'UI Automation for Engineering Workflows',
        desc: 'Automation system built in C# to streamline repetitive engineering processes. Automated end-to-end workflows including data input, processing, and report generation — reducing manual intervention, minimizing human error, and improving turnaround time for engineering analysis.',
        tags: ['C#', 'UiPath Studio', 'UiPath Robots'],
        private: true,
    },
]

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
