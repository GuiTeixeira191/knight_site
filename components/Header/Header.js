import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.head_container}>
            <div className="head_img">
                <img src="/logo.png" alt="Cavaleiros do Zodíaco" />
            </div>
            <h1 className={styles.title}>Olá Mundo</h1> 
        </div>
    )
}

export default Header