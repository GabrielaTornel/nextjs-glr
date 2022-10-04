import Head from 'next/head'
import Link from 'next/link'
import { Notice } from '../components/notice'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La república</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>AQUI VA LA INFORMACION DE LAS TARJETAS</h1>
        
        <Notice />
      <div className="alert alert-primary" role="alert">Ir a <Link href="/elecciones">Ir a elecciones</Link></div></main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}