import { useState, useEffect } from 'react'
import Link from 'next/link'
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
          {/* <span className={styles.logoText}>ITEC HELP</span> */}
        </div>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
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
