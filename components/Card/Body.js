import React from "react";
import Card from "./Card";
import styles from '../../styles/Body.module.css'

const Body = () => {
    return (
        <div className={styles.body_cards}>
           <div className={styles.card}> 
                <Card
                    image= '/mu.jpg'
                    title= 'Mu de Áries'
                />
                <Card
                    image= '/aldebaran.jpg'
                    title= 'Aldebaran de Touro'
                />
                <Card
                    image= '/saga.jpg'
                    title= 'Saga de Gêmeos'
                />
                <Card
                    image= '/Mascara_da_morte.jpg'
                    title= 'Máscara da Morte de Câncer'
                />
            </div>

            <div className={styles.card}> 
                <Card
                    image= '/aiolia.jpg'
                    title= 'Aiolia de Leão'
                />
                <Card
                    image= '/shaka.jpg'
                    title= 'Shaka de Virgem'
                />
                <Card
                    image= '/dohko.jpg'
                    title= 'Dohko de Libra'
                />
                <Card
                    image= '/milo.jpg'
                    title= 'Milo de Escorpião'
                />
            </div>

            <div className={styles.card}> 
                <Card
                    image= '/aioros.jpg'
                    title= 'Aioros de Sagitário'
                />
                <Card
                    image= '/shura.jpg'
                    title= 'Shura de Capricórnio'
                />
                <Card
                    image= '/camus.jpg'
                    title= 'Camus de Aquário'
                />
                <Card
                    image= '/afrodite.jpg'
                    title= 'Afrodite de Peixes'
                />
            </div>
        </div>
    )
}

export default Body