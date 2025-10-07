import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.heroBadge}>🛡️ Sydney&apos;s Trusted IT Partner</span>
          <h1 className={styles.heroTitle}>
            Secure IT Solutions That Scale With Your Business
          </h1>
          <p className={styles.heroSubtitle}>
            Protect your business with enterprise-level IT support designed for small and medium businesses across Sydney & NSW. 24/7 monitoring, expert support, and proactive solutions.
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Get Free Assessment →
            </a>
            <a href="tel:+61284884429" className={`${styles.btn} ${styles.btnSecondary}`}>
              📞 Emergency Support
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Businesses Protected</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Uptime Guarantee</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15min</span>
                <span className={styles.statLabel}>Response Time</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div>Scroll Down</div>
        <div style={{ fontSize: '2rem' }}>↓</div>
      </div>
    </section>
  )
}

export default Hero
