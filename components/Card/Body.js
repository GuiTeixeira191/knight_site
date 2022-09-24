import React from "react";
import Card from "./Card";
import styles from '../../styles/Body.module.css'
import Link from "next/link";

const Body = () => {
    return (
        <div className={styles.body_cards}>
            
            <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/mu.jpg' title= 'Mu de Áries'/>
                    </a>
                </Link>
            </div>

            <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/aldebaran.jpg' title= 'Aldebaran de Touro'/>
                    </a>
                </Link>
            </div>

            <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/saga.jpg' title= 'Saga de Gêmeos'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/Mascara_da_morte.jpg' title= 'Máscara da Morte de Câncer'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/aiolia.jpg' title= 'Aiolia de Leão'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/shaka.jpg' title= 'Shaka de Virgem'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/dohko.jpg' title= 'Dohko de Libra'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/milo.jpg' title= 'Milo de Escorpião'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/aioros.jpg' title= 'Aioros de Sagitário'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/shura.jpg' title= 'Shura de Capricórnio'/>
                    </a>
                </Link>
            </div>

                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/camus.jpg' title= 'Camus de Aquário'/>
                    </a>
                </Link>
            </div>


                <div className={styles.card}> 
                <Link href='/Cavaleiros/Mu_de_Aries'>
                    <a>
                    <Card image= '/afrodite.jpg' title= 'Afrodite de Peixes'/>
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Body