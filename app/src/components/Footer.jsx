import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Designed & Built by Diether Garcia Dela Cruz · {new Date().getFullYear()}
    </footer>
  )
}
