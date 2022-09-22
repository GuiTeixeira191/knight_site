import '../styles/globals.css'
import Header from '../components/Header/Header'
import styles from '../styles/MyApp.module.css'
import { Footer } from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.background}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  )
}

export default MyApp
