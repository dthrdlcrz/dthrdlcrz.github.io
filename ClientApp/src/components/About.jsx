import styles from './About.module.css'

const info = [
  { label: 'Location', value: 'Santa Maria, Bulacan, PH' },
  { label: 'Role', value: 'Lead Software Developer' },
  { label: 'Education', value: 'BS Computer Engineering — Magna Cum Laude' },
  { label: 'Target Roles', value: '.NET Developer · Automation Developer · RPA Developer' },
  { label: 'Status', value: 'Open to opportunities', green: true },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="section-label">About</div>
        <div className={styles.grid}>
          <div>
            <h2 className="section-title">Who I am</h2>
            <div className={styles.text}>
              <p>I'm a results-driven Lead Software Developer with 2+ years of experience specializing in .NET development, UI automation, and full-stack web applications.</p>
              <p>At PowerSolv Incorporated, I lead the full migration of legacy C++ systems to modern C# architecture, build UI automation tools for engineering workflows, and mentor junior developers — all within an Agile/Scrum environment. Currently advancing toward the UiPath Automation Developer Professional certification.</p>
              <p>I'm currently targeting roles in .NET development and automation/RPA, where I can apply my skills in C#, ASP.NET, and process automation to solve real engineering problems.</p>
            </div>
          </div>
          <div className={styles.infoList}>
            {info.map(({ label, value, green }) => (
              <div key={label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{label}</span>
                <span className={styles.infoVal} style={green ? { color: 'var(--green)' } : {}}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
