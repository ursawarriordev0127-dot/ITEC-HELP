import Head from 'next/head'
import Header from '../components/Header'
import { useEffect } from 'react'
import styles from '../styles/FAQ.module.css'

const FAQ = () => {
  useEffect(() => {
    // FAQ toggle functionality
    const toggleFAQ = (faqItem) => {
      const isActive = faqItem.classList.contains(styles.active)

      // Close all FAQs
      document.querySelectorAll(`.${styles.faqItem}`).forEach(item => {
        item.classList.remove(styles.active)
      })

      // Toggle current FAQ
      if (!isActive) {
        faqItem.classList.add(styles.active)

        // Scroll into view smoothly
        setTimeout(() => {
          faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }, 300)
      }
    }

    // Add click handlers to all FAQ questions
    const faqQuestions = document.querySelectorAll(`.${styles.faqQuestion}`)
    faqQuestions.forEach(question => {
      question.addEventListener('click', (e) => {
        const faqItem = e.target.closest(`.${styles.faqItem}`)
        toggleFAQ(faqItem)
      })
    })

    // Cleanup event listeners
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', toggleFAQ)
      })
    }
  }, [])

  return (
    <div>
      <Head>
        <title>FAQ - ITEC HELP | Frequently Asked Questions</title>
        <meta name="description" content="Get answers to common questions about ITEC HELP&apos;s IT support and managed services. Learn about our pricing, support hours, cybersecurity, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.faqSection}>
        {/* Header */}
        <div className={styles.faqHeader}>
          <span className={styles.faqBadge}>FREQUENTLY ASKED QUESTIONS</span>
          <h1 className={styles.faqTitle}>Got Questions? We&apos;ve Got Answers</h1>
          <p className={styles.faqSubtitle}>Everything you need to know about our IT support and managed services for your business</p>
        </div>

        {/* FAQ Items */}
        <div className={styles.faqContainer}>
          {/* Question 1 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>1</span>
              <span className={styles.faqQuestionText}>What services does ITEC HELP provide?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>ITEC HELP is a full-service IT Managed Service Provider (MSP) specializing in small and medium businesses across Sydney and NSW. We provide:</p>
              <ul>
                <li><strong>24/7 IT Monitoring & Support</strong> - Proactive system monitoring with 15-minute average response time</li>
                <li><strong>Cybersecurity Protection</strong> - Multi-layered security, threat detection, and ransomware prevention</li>
                <li><strong>Cloud Solutions</strong> - Migration, management, and optimization of cloud platforms (Microsoft 365, Google Workspace, AWS)</li>
                <li><strong>Network Management</strong> - Infrastructure monitoring, optimization, and maintenance</li>
                <li><strong>Data Backup & Recovery</strong> - Automated backups with rapid disaster recovery</li>
                <li><strong>IT Consulting & Strategy</strong> - Technology planning aligned with your business goals</li>
              </ul>
              <p>With over 15 years of experience and 500+ businesses protected, we&apos;re your trusted IT partner.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>2</span>
              <span className={styles.faqQuestionText}>How much do your IT services cost?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>We offer transparent, predictable pricing with no hidden fees. Typical investment ranges:</p>
              <p><strong>Per User Pricing:</strong> $80-$150 per user/month depending on service level and company size.</p>
              <p><strong>What&apos;s Included:</strong></p>
              <ul>
                <li>24/7 network and system monitoring</li>
                <li>Unlimited help desk support during business hours</li>
                <li>Security management and updates</li>
                <li>Automated backup and recovery</li>
                <li>Regular maintenance and patching</li>
                <li>Strategic IT planning and consulting</li>
              </ul>
              <p><strong>Cost Comparison:</strong> Our managed services typically cost <strong>5-7x less</strong> than hiring a full-time IT employee, while providing 24/7 coverage and access to a team of experts.</p>
              <p><strong>Get a Free Quote:</strong> Contact us at <strong>(02) 8488 4429</strong> for a customized assessment and transparent pricing tailored to your specific needs.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>3</span>
              <span className={styles.faqQuestionText}>What are your support hours and response times?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p><strong>Business Hours Support:</strong> Monday-Friday, 8:00 AM - 6:00 PM AEDT via phone, email, support portal, and live chat.</p>
              <p><strong>Emergency Support:</strong> 24/7/365 emergency hotline for critical issues including server failures, network outages, and security breaches.</p>
              <p><strong>Response Times:</strong></p>
              <ul>
                <li><strong>Critical (Business Down):</strong> 15 minutes or less</li>
                <li><strong>High Priority:</strong> 1 hour</li>
                <li><strong>Medium Priority:</strong> 4 hours</li>
                <li><strong>Low Priority:</strong> 24 hours</li>
              </ul>
              <p>Our average response time across all priorities is just <strong>15 minutes</strong>. Our monitoring systems watch your infrastructure 24/7, often detecting and resolving issues before you even notice them!</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>4</span>
              <span className={styles.faqQuestionText}>How do you protect our business from cyber threats and ransomware?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>We implement a <strong>multi-layered security approach</strong> to protect your business:</p>
              <ul>
                <li><strong>Perimeter Defense:</strong> Enterprise-grade firewalls, email filtering, and web protection</li>
                <li><strong>Endpoint Protection:</strong> Advanced antivirus, anti-ransomware, and device encryption on all computers</li>
                <li><strong>Access Control:</strong> Multi-factor authentication (MFA) and strong password policies</li>
                <li><strong>24/7 Monitoring:</strong> Real-time threat detection and automated response</li>
                <li><strong>Employee Training:</strong> Regular security awareness training and phishing simulation tests</li>
                <li><strong>Backup Protection:</strong> Immutable backups that ransomware cannot encrypt or delete</li>
              </ul>
              <p><strong>Ransomware Response:</strong> If an attack occurs, we can typically restore your data within 2-4 hours from clean backups. <strong>Important:</strong> None of our actively managed clients have lost data to ransomware attacks!</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>5</span>
              <span className={styles.faqQuestionText}>Do you provide both remote and on-site support?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>Yes! We provide both remote and on-site support to meet all your IT needs:</p>
              <p><strong>Remote Support (90% of issues):</strong></p>
              <ul>
                <li>Faster resolution with no travel time</li>
                <li>Secure remote access to your systems</li>
                <li>Screen sharing for user guidance and training</li>
                <li>Included in all service packages</li>
              </ul>
              <p><strong>On-Site Support (when needed):</strong></p>
              <ul>
                <li>Hardware installation and repairs</li>
                <li>Network infrastructure setup and upgrades</li>
                <li>Complex troubleshooting that requires physical access</li>
                <li>New office setups and relocations</li>
              </ul>
              <p>Most packages include a set number of on-site visits per month. For Sydney metro businesses, we can typically be on-site within <strong>2-4 hours for emergencies</strong>.</p>
            </div>
          </div>

          {/* Question 6 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>6</span>
              <span className={styles.faqQuestionText}>Can you help us migrate to the cloud?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>Absolutely! Cloud migration is one of our specialties. Our proven process includes:</p>
              <p><strong>1. Assessment:</strong> We evaluate your current infrastructure and identify which systems and data should move to the cloud.</p>
              <p><strong>2. Planning:</strong> We develop a customized migration strategy designed to minimize downtime and disruption.</p>
              <p><strong>3. Migration:</strong> We seamlessly transfer your data, applications, and systems to platforms like Microsoft 365, Google Workspace, AWS, or Azure.</p>
              <p><strong>4. Training:</strong> We ensure your team knows how to effectively use the new cloud tools.</p>
              <p><strong>5. Ongoing Management:</strong> We monitor, optimize, and secure your cloud environment.</p>
              <p><strong>Our Track Record:</strong> We&apos;ve successfully migrated hundreds of businesses to the cloud with an average of <strong>zero data loss and less than 4 hours of downtime</strong>.</p>
            </div>
          </div>

          {/* Question 7 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>7</span>
              <span className={styles.faqQuestionText}>What makes ITEC HELP different from other IT companies?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>Here&apos;s what sets us apart:</p>
              <ul>
                <li><strong>Proactive, Not Reactive:</strong> We prevent problems before they happen, not just fix them after</li>
                <li><strong>15-Minute Response Time:</strong> Industry-leading response for critical issues</li>
                <li><strong>Local Expertise:</strong> Based in Sydney with deep understanding of Australian businesses</li>
                <li><strong>Certified Professionals:</strong> Microsoft, Cisco, and CompTIA certified technicians</li>
                <li><strong>Transparent Pricing:</strong> No hidden fees or surprise charges - you know exactly what you&apos;re paying for</li>
                <li><strong>Business-Focused:</strong> We align technology with your business goals, not just fix computers</li>
                <li><strong>99.9% Uptime Guarantee:</strong> We keep your business running smoothly</li>
                <li><strong>Australian Data Storage:</strong> All backups stored in secure Australian data centers</li>
              </ul>
              <p>Plus, we&apos;ve been protecting businesses since 2008 with over 500 satisfied clients!</p>
            </div>
          </div>

          {/* Question 8 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>8</span>
              <span className={styles.faqQuestionText}>Are there any contracts or can we cancel anytime?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>We offer flexible contract terms to suit your business needs:</p>
              <p><strong>Month-to-Month Agreement:</strong></p>
              <ul>
                <li>No long-term commitment required</li>
                <li>Cancel with 30 days notice</li>
                <li>Perfect for businesses wanting to test our services</li>
              </ul>
              <p><strong>12-Month Agreement:</strong></p>
              <ul>
                <li>Typically 10% discount on monthly rates</li>
                <li>Priority scheduling for on-site visits</li>
                <li>Most popular option for established businesses</li>
              </ul>
              <p><strong>36-Month Agreement:</strong></p>
              <ul>
                <li>Typically 15-20% discount on monthly rates</li>
                <li>Best value for long-term partnerships</li>
                <li>Locked-in pricing protection</li>
              </ul>
              <p><strong>No Lock-in Philosophy:</strong> We&apos;re confident in our service quality, so we don&apos;t force lengthy contracts. We want to earn your business every month!</p>
            </div>
          </div>

          {/* Question 9 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>9</span>
              <span className={styles.faqQuestionText}>How quickly can you get started with our business?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>We can typically have you fully up and running within <strong>1-2 weeks</strong>. Here&apos;s our onboarding timeline:</p>
              <p><strong>Day 1-2:</strong> Initial consultation and IT assessment (free)</p>
              <p><strong>Day 3-5:</strong> Customized proposal and service agreement</p>
              <p><strong>Week 2:</strong> Onboarding process:</p>
              <ul>
                <li>Install monitoring tools on your systems</li>
                <li>Configure security settings and backups</li>
                <li>Set up help desk access for your team</li>
                <li>Complete network and system documentation</li>
                <li>Train your team on support procedures</li>
              </ul>
              <p><strong>From Week 2 onwards:</strong> Full 24/7 monitoring and support begins!</p>
              <p><strong>Emergency Situations:</strong> If you&apos;re experiencing a critical IT issue, we can provide emergency support immediately while we work on full onboarding.</p>
              <p><strong>Ready to get started?</strong> Call us today at <strong>(02) 8488 4429</strong> for your free assessment!</p>
            </div>
          </div>

          {/* Question 10 */}
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>10</span>
              <span className={styles.faqQuestionText}>What if we already have some IT support in place?</span>
              <span className={styles.faqIcon}>+</span>
            </div>
            <div className={styles.faqAnswer}>
              <p>No problem! We&apos;re experienced in working with businesses transitioning from other arrangements:</p>
              <p><strong>From Another IT Provider:</strong></p>
              <ul>
                <li>We&apos;ll coordinate a smooth handover with minimal disruption</li>
                <li>Review existing systems and documentation</li>
                <li>Identify any gaps or security vulnerabilities</li>
                <li>Provide a clear transition plan with timelines</li>
              </ul>
              <p><strong>From Part-Time IT Person:</strong></p>
              <ul>
                <li>We can work alongside them or take over completely</li>
                <li>Provide enterprise-level tools and expertise they may lack</li>
                <li>Offer 24/7 coverage beyond their availability</li>
                <li>Document all systems for knowledge continuity</li>
              </ul>
              <p><strong>From DIY/Break-Fix Support:</strong></p>
              <ul>
                <li>Assess current infrastructure and security posture</li>
                <li>Implement proactive monitoring to prevent future issues</li>
                <li>Upgrade outdated systems and software</li>
                <li>Establish proper backup and disaster recovery</li>
              </ul>
              <p>We&apos;ll work at your pace to ensure a seamless transition without disrupting your business operations.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.faqCta}>
          <h3>Still Have Questions?</h3>
          <p>Our team is ready to help! Contact us for a free consultation and get personalized answers for your business.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:+61284884429" className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
              📞 Call (02) 8488 4429
            </a>
            <a href="mailto:help@itechelp.com.au" className={`${styles.ctaBtn} ${styles.ctaBtnSecondary}`}>
              📧 Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
