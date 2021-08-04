import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oversea Academy</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image alt="Oversea Academy" src="/Logo2.png" width={320} height={128} />
        <h3 className={styles.title}>
          Coming soon!
        </h3>

        <p className={styles.description}>
          Visit our instagram <a href="https://www.instagram.com/oversea.academy/" target="_blank" rel="noreferrer">@oversea.academy</a>
        </p>
        
      </main>
    </div>
  )
}
