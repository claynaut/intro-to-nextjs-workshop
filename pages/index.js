import Head from 'next/head'
import { AccordionDemo, StaticListDemo, CRUDListDemo } from '../components/Demo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Into to Next.JS Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AccordionDemo />
        <StaticListDemo />
        <CRUDListDemo />
      </main>
    </div>
  )
}