import React, { FC } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
    children?: JSX.Element | JSX.Element[];
}

const MainLayout: FC<Props> = ({ children }) => {
    
    return (
        <div className={styles.container}>

            <Head>
                <title>Home - Juan Martin Silva</title>
                <meta name="description" content="Home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                { children }
            </main>
           
        </div>
    )
}

export default MainLayout;