import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const roles = [
  'Lead Software Developer',
  'Automation Developer',
  '.NET Developer',
  'Full Stack Developer',
]

function useTypingEffect(words) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 70)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
      timeout = setTimeout(() => {}, 400)
    }

    setDisplay(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words])

  return display
}

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
            {[
              { num: '2+', label: 'Years of experience' },
              { num: '.NET', label: 'C#, ASP.NET, VB.NET' },
              { num: 'UiPath', label: 'Automation Developer' },
            ].map(({ num, label }) => (
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
