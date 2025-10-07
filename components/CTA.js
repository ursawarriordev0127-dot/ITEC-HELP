import styles from '../styles/CTA.module.css'

const CTA = () => {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Ready to Secure Your Business?</h2>
        <p>
          Get a free IT assessment and discover how we can protect and optimize your technology infrastructure. No obligation, just expert insights.
        </p>
        <div className={styles.ctaButtons}>
          <a href="mailto:help@itechelp.com.au" className={`${styles.btn} ${styles.btnPrimary}`}>
            📧 Email Us: help@itechelp.com.au
          </a>
          <a href="tel:+61284884429" className={`${styles.btn} ${styles.btnSecondary}`}>
            📞 Call: (02) 8488 4429
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
