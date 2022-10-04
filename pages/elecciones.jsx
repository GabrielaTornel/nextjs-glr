import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Elecciones() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La república</title>
        <meta name="description" content="Elecciones" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Elecciones</h1>

        <div className="alert alert-primary" role="alert">
          Ir a <Link href="/">Inicio</Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
