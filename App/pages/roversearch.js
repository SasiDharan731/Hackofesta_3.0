import React from 'react';
import searching from '../Assets/magnifier.json';
import styles from '../styles/roversearch.module.css';
import Lottie from 'react-lottie';
function Roversearch() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: searching,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div>
            <div className={styles.center}>
                <Lottie options={defaultOptions} height={200} width={200} />
                <div>
                    <p>Searching for bots nearby</p>
                </div>
            </div>
        </div>
    );
}

export default Roversearch;
