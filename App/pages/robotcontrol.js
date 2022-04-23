import React from 'react';
import styles from '../styles/robotcontrol.module.css';
import Image from 'next/image';
import battery from '../Assets/battery.png';
import location from '../Assets/location.png';
import planting from '../Assets/planting.png';
import harvesting from '../Assets/harvesting.png';
import maintenance from '../Assets/maintenance.png';
import Lottie from 'react-lottie';
import animationData from '../Assets/loading_dots.json';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Animation
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../hooks/AnimatedProgressProvider';
function robotcontrol() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const seeding = async () => {
        setLoading(true);
        await axios
            .get('http://172.20.10.13:5000/flask?move=left')
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const stop_seeding = async () => {
        setLoading(false);
        await axios
            .get('http://172.20.10.13:5000/flask?move=stop')
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className={styles.pu}>
                <div className={styles.topBar}>
                    <div onClick={() => router.push('/dashboard')}>
                        <span className={styles.headingHi}>Hi, A2Z</span> <br />
                        <span className={styles.greeting}>Good Afternoon!</span>
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.camerafeed}>
                    <img
                        className={styles.camFeed}
                        src="http://172.20.10.13:8080/?action=stream"
                    />
                </div>
                {!loading ? (
                    <div className={styles.seedsbutton} onClick={seeding}>
                        Plant Seeds
                    </div>
                ) : (
                    <div className={styles.seedsbutton} onClick={stop_seeding}>
                        Stop
                    </div>
                )}

                <div className={styles.containerCard}>
                    <div className={styles.carsConatiner}>
                        <div className={styles.card}>
                            <Image
                                src={battery}
                                alt="Picture of the author"
                                width={45}
                                height={45}
                                onClick={() => router.push('/industries')}
                            />
                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Battery
                                </span>
                                <br />
                                <span className={styles.helperDown}>100%</span>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={location}
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />

                            <div className={styles.helperText}>
                                <span className={styles.helperHead}>
                                    Robot Location
                                </span>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.robotworks}>
                <div className={styles.robotworks_head}>Tomato</div>

                <div className={styles.detailsdiv}>
                    <div className={styles.details}>
                        <Image
                            src={planting}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                        />
                        <p className={styles.detailstext}>Planting</p>
                    </div>

                    <div className={styles.details}>
                        <Image
                            src={harvesting}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                        />
                        <p className={styles.detailstext}>Harvesting</p>
                    </div>

                    <div className={styles.details}>
                        <Image
                            src={maintenance}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                        />
                        <p className={styles.detailstext}>Maintenance</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default robotcontrol;
