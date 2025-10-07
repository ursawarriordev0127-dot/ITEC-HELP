import { useState, useEffect } from 'react'
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
          <li><a href="/">🏠<br />Home</a></li>
          <li><a href="/#services">🛠️<br />Services</a></li>
          <li><a href="/faq">❓<br />FAQ</a></li>
          <li><a href="/#contact">📞<br />Contact</a></li>
        </ul>

        {/* <div className={styles.contactInfo}>
          <a href="tel:+61284884429" className={styles.contactButton}>
            <span className={styles.contactIcon}>📞</span>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Call Now</span>
              <span className={styles.contactValue}>(02) 8488 4429</span>
            </div>
          </a>

          <a href="mailto:help@itechelp.com.au" className={styles.contactButton}>
            <span className={styles.contactIcon}>✉️</span>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Email Us</span>
              <span className={styles.contactValue}>help@itechelp.com.au</span>
            </div>
          </a>
        </div>

        <div className={styles.quickActions}>
          <button className={styles.actionButton}>
            Get Quote
          </button>
          <button className={styles.actionButton}>
            24/7 Support
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default MobileFooter
