import { aboutText, aboutInfo } from '../configs/portfolioData'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="section-label">About</div>
        <div className={styles.grid}>
          <div>
            <h2 className="section-title">Who I am</h2>
            <div className={styles.text}>
              {aboutText.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className={styles.infoList}>
            {aboutInfo.map(({ label, value, green }) => (
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
