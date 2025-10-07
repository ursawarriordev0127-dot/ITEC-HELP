import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>ITEC HELP</div>
          <p>Your trusted IT partner for secure, reliable, and scalable technology solutions. Protecting businesses across Australia since 2020.</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>📘</a>
            <a href="#" className={styles.socialLink}>🐦</a>
            <a href="#" className={styles.socialLink}>💼</a>
            <a href="#" className={styles.socialLink}>📧</a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#services">Cybersecurity</a></li>
            <li><a href="#services">Cloud Solutions</a></li>
            <li><a href="#services">Help Desk</a></li>
            <li><a href="#services">Network Management</a></li>
            <li><a href="#services">Data Backup</a></li>
            <li><a href="#services">IT Consulting</a></li>
            <li><a href="#services">Website UX Design</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <ul className={styles.footerLinks}>
            <li><a href="tel:+61284884429">(02) 8488 4429</a></li>
            <li><a href="mailto:help@itechelp.com.au">help@itechelp.com.au</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
