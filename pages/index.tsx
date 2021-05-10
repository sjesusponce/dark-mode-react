import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { GetStaticProps, GetStaticPaths, GetServerSideProps,  } from 'next'

const Home = ()=>{
  return (
    <section className={styles.main}>
      <p>Main Page</p>
    </section>
  )
}

export default Home