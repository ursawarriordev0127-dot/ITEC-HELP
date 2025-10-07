import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            ITEC<br />HELP
          </div>
          <span className={styles.logoText}>ITEC HELP</span>
        </div>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <a href="tel:+61284884429" className={styles.emergencyCall}>
          📞 (02) 8488 4429
        </a>

        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
