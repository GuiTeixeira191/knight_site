import React from 'react'
import styles from '../../styles/Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.foot}>
                <h1>Os Cavaleiros do Zodíaco</h1>
            </div>

            <div className={styles.media}>
                <p>Projeto desenvolvido por: Guilherme Teixeira</p>
                Find me On:
            </div>

            <div className={styles.media_tag}>
                <a className={styles.a} href="https://www.linkedin.com/">
                <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/>
                </a>

                <a className={styles.a} href="https://www.youtube.com/">
                <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
                </a>

                <a className={styles.a} href="https://instagram.com/">
                <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
                </a>
            </div>

            <small className={styles.small}>
                <p> &copy; All Rights Reserved</p>
            </small>

        </div>
    )
}
