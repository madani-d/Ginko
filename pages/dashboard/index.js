import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ginko Dashboard!!!!</h1>
      </main>

      <Link href="/">Retour à l'accueil</Link>

      <footer className={styles.footer}></footer>
    </div>
  );
}
