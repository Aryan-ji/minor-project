import Navigation from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navigation />
    <Component {...pageProps} />
  </>
}
