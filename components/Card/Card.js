import React from "react";
import styles from '../../styles/Card.module.css'


const Card = ( {image, title} ) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image} alt='image'/>
                </div>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default Card