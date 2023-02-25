import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Animation from '../animation/Animation'
import Service from '@/components/Service'
import Footer from '@/components/Footer'
import { Modal } from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Animation/>
    <About/>
    <br/>
    <Modal/>
    <Service/>
    <Animation/>
    <Footer/>
    </>
  )
}
