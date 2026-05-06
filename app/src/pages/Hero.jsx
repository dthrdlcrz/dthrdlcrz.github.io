import useTypingEffect from '../hooks/useTypingEffect'
import { roles, stats } from '../configs/portfolioData'
import styles from './Hero.module.css'

export default function Hero() {
  const typed = useTypingEffect(roles)

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgDeco} />
      <div className={styles.bgDeco2} />
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.content} fade-up`}>
            <div className={styles.tag}>Santa Maria, Bulacan, Philippines</div>
            <h1 className={styles.name}>
              Diether<br />
              Garcia<br />
              <em>Dela Cruz</em>
            </h1>
            <p className={styles.role}>
              <span>{typed}</span>
              <span className={styles.cursor}>|</span>
            </p>
            <div className={styles.btns}>
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
            </div>
            <div className={styles.badge}>
              <span className={styles.dot} />
              Available for opportunities
            </div>
          </div>

          <div className={`${styles.stats} fade-up`} style={{ animationDelay: '0.2s' }}>
            {stats.map(({ num, label }) => (
              <div key={label} className={styles.statRow}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
