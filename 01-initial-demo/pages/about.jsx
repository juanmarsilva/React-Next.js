import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const AboutPage = () => {
    return (
        <div className={styles.container} >
            <Head>
                <title>About - Juan Martin Silva</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                <h1 className={styles.title}>
                    {/* Ir al <a href="/">Home</a> */}
                    Ir al <Link href='/' >Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '} <code className={styles.code}>pages/about.jsx</code>
                </p>

            </main>
    </div>
    );
};

export default AboutPage;
