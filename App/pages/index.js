import Lottie from 'react-lottie';
import animationData from '../Assets/loading.json';
import styles from '../styles/Loading.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const router = useRouter();
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
        <div className={styles.center}>
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
}
