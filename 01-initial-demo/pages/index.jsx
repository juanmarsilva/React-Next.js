import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Home - Juan Martin Silva</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        <h1 className={styles.title}>
          {/* Ir al <a href="/about">About</a> */}
          Ir al <Link href='/about'>About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>
    </div>
  )
}
