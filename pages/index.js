import Head from 'next/head'
import styles from '../styles/home.module.css'
import ApiBar from '../components/apiBar'

export default function Home() {
  return (
    <div className={`container hFull`}>
      <Head>
        <title>Vizoo API</title>
        <meta name="description" content="Open source API tool for visualizing requests.  Easily test and debug endpoints." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApiBar style={{marginLeft:"auto", marginRight:"auto"}}/>
      <main className={`main ${styles.py8}`}>
      </main>
    </div>
  )
}
