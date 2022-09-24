import React from "react";
import styles from "../../styles/Header.module.css";
import Link from 'next/link';
import Head from "next/head";

const Header = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
            </Head>
            <div className={styles.nav_container}>
                <div className={styles.logo_container}>
                    <img className={styles.mini_logo} src="/logo.png" alt="Cavaleiros do Zodíaco" /> 
                </div>
            
                <ul className={styles.nav}>
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
                </ul>

                <div className={styles.btn_container}>
                    <button className={styles.login_btn} type="submit">LogIn</button>
                    <button className={styles.create_btn} type="submit">Create Account</button>
                </div>

                <div className={styles.menu_hamburguer}>
                <i class="fa-solid fa-bars"></i>
                </div>

            </div>

            <div className={styles.image_container}>
                <img className={styles.image} src="/logo.png" alt="Cavaleiros do Zodíaco" />
            </div>

        </div>
    )
}

export default Header