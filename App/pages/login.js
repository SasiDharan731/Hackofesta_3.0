import React from 'react';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import logo from '../Assets/icon-512x512.png'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
function Login() {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const sumbit = () => {
        console.log('Sumbitted');
        axios
            .post('http://localhost:3002/login', {
                email,
                password: pass,
            })
            .then((data) => {
                localStorage.setItem('user', JSON.parse(data));
                if (data.data.status === 'OK') {
                    router.push('/dashboard');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handlePass = (e) => {
        const value = e.target.value;
        setPass(value);
    };

    const checkLoggedIn = () => {
        const user = localStorage.getItem('user');
        if (user === null) {
            router.push('/login');
        } else {
            router.push('/dashboard');
        }
    };
    useEffect(() => {
        checkLoggedIn();
    }, []);

    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                <div className={styles.textdiv}>
                    <Image src={logo} alt="logo" width={70} height={70} />
                    <p className={styles.product}>A2Z Agri</p>
                    <p className={styles.text}>Looks like you’ve not signed in</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.input}>
                            <div className={styles.lable}>
                                <p className={styles.detailinp}>Email address</p>
                            </div>
                            <div className={styles.box}>
                                <input className={styles.inputbox} type="text" onChange={handleEmail} />
                            </div>
                            <div className={styles.lable}>
                                <p className={styles.detailinp}>Password</p>
                            </div>
                            <div className={styles.box}>
                                <input className={styles.inputbox} type="password" onChange={handlePass} />
                            </div>
                            <div className={styles.forgetPass}>
                                <p className={styles.forgetpass}>Forgot password?</p>
                            </div>
                            <div>
                                <button className={styles.button} onClick={sumbit}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
