import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact - Juan Martin Silva</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                <h1 className={styles.title}>
                {/* Ir al <a href="/about">About</a> */}
                Ir al <Link href='/'>Home</Link>
                </h1>

                <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/contact.jsx</code>
                </p>

            </main>
        </div>
    )
}

export default Contact;
