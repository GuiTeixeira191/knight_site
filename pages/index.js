import React from "react"
import styles from "../styles/Home.module.css"
import Link from "next/link"


const Home = () => {
  return (
    <div >
      <h1 className={styles.title}>Hello World</h1>
      <Link href="/" >
      <a className={styles.a}>
        <img className={styles.mu} src="/mu.jpg" alt="Aries no Mu" />
        <h1 >Aries no Mu</h1>
      </a>
      </Link>
    </div>
  )
}

export default Home
