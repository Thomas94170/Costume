import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'


export default function Home() {
  return (
    <>
    <Layout page='Home'>
      <h1>La NASA et ses API </h1>
      <br />
      <img src='/Accueil.jpg'/>

    </Layout>
    </>
  )
}
