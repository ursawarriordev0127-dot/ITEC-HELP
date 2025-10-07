import '../styles/globals.css'
import MobileFooter from '../components/MobileFooter'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <MobileFooter />
    </>
  )
}

// Global CSS variables are now properly loaded in globals.css
// and will be available to all CSS modules
