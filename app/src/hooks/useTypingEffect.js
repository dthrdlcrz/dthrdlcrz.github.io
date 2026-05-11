import { useState, useEffect } from 'react'

export default function useTypingEffect(words) {
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
