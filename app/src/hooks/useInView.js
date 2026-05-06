import { useState, useEffect } from 'react'

export default function useInView(ref, options = { threshold: 0.1, triggerOnce: true }) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.triggerOnce) observer.disconnect()
      }
    }, { threshold: options.threshold })

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [ref, options.threshold, options.triggerOnce])

  return inView
}
