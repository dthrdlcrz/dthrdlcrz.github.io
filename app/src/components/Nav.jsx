import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact']

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(section => {
        const sectionMiddle = section.offsetTop - window.innerHeight / 2
        if (window.scrollY >= sectionMiddle) {
          current = section.id
        }
      })
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>DGDC</a>

      <div className={styles.rightGroup}>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={active === link ? styles.activeLink : styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {link === 'certifications' ? 'Certs' : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <span className={styles.themeIcon}>{theme === 'dark' ? '☀' : '☾'}</span>
          <span className={styles.themeText}>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine} />
          <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
          <span className={menuOpen ? styles.burgerLineOpen3 : styles.burgerLine} />
        </button>
      </div>
    </nav>
  )
}
