import React from 'react'
import Image from 'next/image';
import styles from '../styles/industries.module.css';
import brinjal from '../Assets/eggplant.png';
import ind_button from '../Assets/indbutton.png'

function industries() {
  return (
    <div>

        <div className={styles.pu}>
            <div className={styles.topBar}>
                <div>
                    <span className={styles.headingHi}>Hi, A2Z</span> <br />
                    <span className={styles.greeting}>Good Afternoon!</span>
                </div>
            </div>
        </div>

        <div className={styles.industries}>
            <div className={styles.ind_head}>
                <Image
                    src={brinjal}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                <h1 className={styles.fruitname}>Brinjal</h1>
            </div>
        </div>

        <div className={styles.indcontainer}>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Lucky Agro</p>
                    <p className={styles.indcard_subhead}>Vegs Required: 1 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Brinjal</p>
                </div>

                <div className={styles.buttondiv}><Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                /></div>
            </div>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>Brinji Products</p>
                    <p className={styles.indcard_subhead}>Vegs Required: 2.2 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Brinjal</p>
                </div>

                <div className={styles.buttondiv}><Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                /></div>
            </div>

            <div className={styles.ind_card}>
                <div className={styles.ind_cardtext}>
                    <p className={styles.indcard_head}>A2Z Agri farms</p>
                    <p className={styles.indcard_subhead}>Vegs Required: 4.5 Tons</p>
                    <p className={styles.indcard_subhead}>Variety: Brinjal</p>
                </div>

                <div className={styles.buttondiv}><Image
                    src={ind_button}
                    alt="Button"
                    width={50}
                    height={50}
                /></div>
            </div>

        </div>

    </div>
  )
}

export default industries