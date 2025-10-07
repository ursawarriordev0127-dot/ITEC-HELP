import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ITEC HELP - Sydney&apos;s Premier IT Support & Managed Services | 24/7 Emergency Support</title>
        <meta name="description" content="Professional IT Support & Managed Services for SMBs in Sydney & NSW. Cybersecurity, Cloud Solutions, 24/7 Help Desk. Call (02) 8488 4429" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.heroBackground}>
        <div className={styles.animatedShapes}>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
      </div>

      <Header />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
