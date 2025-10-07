import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/MobileFooter.module.css'

const MobileFooter = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide footer
        setIsVisible(false)
      } else {
        // Scrolling up - show footer
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`${styles.mobileFooter} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.mobileFooterContent}>
        <ul className={`${styles.mobileFooterNavLinks}`}>
          <li><Link href="/">🏠<br />Home</Link></li>
          <li><Link href="/#services">🛠️<br />Services</Link></li>
          <li><Link href="/faq">❓<br />FAQ</Link></li>
          <li><Link href="/#contact">📞<br />Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileFooter
