import React from "react";
import styles from "../../styles/Header.module.css"
import Link from 'next/link'

const Head = () => {
    return (
        <div>
            <div className={styles.image_container}>
                <img className={styles.image} src="/logo.png" alt="Cavaleiros do Zodíaco" />
            </div>
            <div className={styles.nav}>
                <li className={styles.li}>
                    <Link href="/">
                        <a className={styles.a}>Home</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/cavaleiros">
                        <a className={styles.a}>Cavaleiros</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/news">
                        <a className={styles.a}>Notícias</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/aboutus">
                        <a className={styles.a}>Sobre Nós</a>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Head