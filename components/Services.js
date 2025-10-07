import styles from '../styles/Services.module.css'

const Services = () => {
  const services = [
    {
      icon: "🛡️",
      title: "Managed Cybersecurity",
      description: "Protect your business from evolving cyber threats with 24/7 monitoring, advanced firewalls, and comprehensive security training for your team.",
      link: "#contact"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Seamless cloud migration and management. Access your data anywhere while reducing costs and improving collaboration across your team.",
      link: "#contact"
    },
    {
      icon: "🔧",
      title: "24/7 Help Desk Support",
      description: "Fast, expert technical support when you need it most. Our average response time of 15 minutes keeps your business running smoothly.",
      link: "#contact"
    },
    {
      icon: "🌐",
      title: "Network Management",
      description: "Proactive monitoring and maintenance of your network infrastructure ensures optimal performance and prevents costly downtime.",
      link: "#contact"
    },
    {
      icon: "💾",
      title: "Data Backup & Recovery",
      description: "Automated backups and rapid disaster recovery solutions ensure your critical business data is always protected and accessible.",
      link: "#contact"
    },
    {
      icon: "💼",
      title: "IT Consulting & Strategy",
      description: "Strategic IT planning and consulting services that align your technology infrastructure with your business goals and growth plans.",
      link: "#contact"
    },
    {
      icon: "💼",
      title: "Website UX Design & Build",
      description: "We design and develop user-friendly, responsive websites that look great, perform fast, and elevate your brand online.",
      link: "#contact"
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>OUR SERVICES</span>
        <h2 className={styles.sectionTitle}>Complete IT Solutions for Growing Businesses</h2>
        <p className={styles.sectionSubtitle}>
          From cybersecurity to cloud migration, we provide comprehensive IT services tailored for Australia businesses
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="mailto:help@itechelp.com.au" className={styles.serviceLink}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
