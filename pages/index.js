import React from "react"
import Header from "../components/Header/Header"
import styles from "../styles/Home.module.css"


const Home = () => {
  return (
    <div >
      <Header/>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  )
}

export default Home
