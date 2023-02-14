'use client'

import React from "react";

import { Unbounded } from '@next/font/google'
import { Raleway } from '@next/font/google'
import { Roboto_Slab } from "@next/font/google";
import styles from './page.module.css'
import Footer from "@/components/footer";
import { motion, useScroll } from 'framer-motion'
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Shooting from "@/components/shooting";
import Explain from "@/components/explain";
import Nav from "@/components/nav";


const title = Unbounded({ subsets: ['latin'] })
const text = Raleway({ subsets: ['latin'] })


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const navVariants = isSmallScreen ? 
  {
    open: {
      display: 'block',
      top: 0,
      right: '10%',
      padding: '10%',
      marginTop: '140px',
      width: '80%',
      color: 'black',
      backgroundColor: 'hsl(15, 13%, 98%)',
      transition: {
        delay: .05,
        duration: .5,
      }
    },
    closed: {
      top: 0,
      right: '10%',
      marginTop: '5%',
      padding: '2.5%',
      width: '80%',
      color: 'black',
      display: 'none',
      backgroundColor: 'hsl(15, 13%, 98%)',
    },
  } 
  : {
    open: {
      display: 'block',
      top: '10%',
      right: '2%',
      padding: '2.5%',
      marginTop: '5%',
      minWidth: 'fit-content',
      width: '15%',
      color: 'black',
      backgroundColor: 'hsl(15, 13%, 98%)',
    },
    closed: {
      top: 0,
      right: '2%',
      padding: '2.5%',
      marginTop: '5%',
      minWidth: 'fit-content',
      width: '15%',
      color: 'black',
      display: 'none',
      backgroundColor: 'hsl(15, 13%, 98%)',
    }
  };
  
  const titleVariants = isSmallScreen ?
  {
    hidden: {
      color: 'black',
      background: 'transparent'
    },
    visible: {
      color: 'black',
      translateY: -380,
      background: 'transparent',
      transition: {
        delay: 1,
        duration: 1.5,
      }
    },
  }
  : {
    hidden: {
      color: 'black',
      background: 'transparent',
    },
    visible: {
      color: 'black',
      translateY: -380,
      background: 'transparent',
      transition: {
        delay: 1,
        duration: 1.5,
      }
    },
  }


  return (
    <>
      <motion.h1 className={`${title.className} absolute w-screen text-center md-mt-0 my-auto md-text-7xl text-6xl uppercase tracking-widest`} initial="hidden" animate="visible"
      variants={titleVariants}>
        lokal <span className='font-bold'>studio</span>
      </motion.h1>
      


      <motion.main className={`${styles.main} py-4 md-px-12 text-black w-screen space-y-6`} initial="hidden" animate="visible" variants={{
        hidden: {
          overflow: 'hidden',
          opacity: 0,
        },
        visible: {
          overflow: 'visible',
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 1,
          }
        }
      }}>

<motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} 
          className={`${styles.menuToggle} fixed top-0 right-0 mt-4 mr-4 md-mt-8 md-mr-12 w-6 h-6 cursor-pointer`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
          </motion.svg>

          <motion.div className="fixed top-0 right-0 mt-32 shadow-2xl rounded-md text-black bg-white" initial="closed" animate={isOpen ? "open" : "closed"}
            variants={navVariants} >
            <Nav />
          </motion.div>


         
          <div className={`${styles.description} `}>
            <p>
            Découvrez une sélection variée de costumes pour vos événements spéciaux 
          et donnez à vos invités un vêtement qui les fera se démarquer! 
          Louez un costume avec nous et amusez-vous à votre prochain événement!
            </p>
          </div>

          <section>
            <div className=" ">
            <Shooting/>
              <br/><br/>
              <Explain/>
            </div>
          </section>
          
          <motion.footer className={`${text.className} relative bottom-0 h-8 text-center w-screen`} initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 1,
              }
            }
          }}>
            <Footer />  
          </motion.footer>
      </motion.main>
    </>
  )
}