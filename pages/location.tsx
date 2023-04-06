import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import Formulaire from "@/components/formulaire";
import styles from '../app/page.module.css'
import Nav from "@/components/nav";
import "../app/globals.css"


export default function Location(){
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

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Appel de l'API route pour récupérer les données
        const response = await fetch('http://localhost:5500/costume');
        const jsonData = await response.json();

        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
    
    return(
        <>
            <div className="coverContact">
                <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} 
                className={`${styles.menuToggle} fixed top-0 right-0 mt-4 mr-4 md-mt-8 md-mr-12 w-6 h-6 cursor-pointer`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                </motion.svg>

                <motion.div className="fixed top-0 right-0 mt-32 shadow-2xl rounded-md text-black bg-white" initial="closed" animate={isOpen ? "open" : "closed"}
                variants={navVariants} >
                <Nav />
                </motion.div>
            </div>

        <div className="grid grid-cols-3 gap-4  m-3">
            {data.map((item) => (
                <div key={item.id}>
                    <div className="m-5">
                         <h3 className="text-lg text-center">{item.titre}</h3>
                            
                            <div className="flex justify-center">
                                <img className="img-galerie m-2" src={item.imageUne} alt={item.titre}></img>
                                <img className="img-galerie m-2" src={item.imageDeux} alt={item.titre}></img>
                            </div>
            
                            <p className="text-center">{item.prix} €/jour</p>
                            
                            <Link href={`/product?id=${item.titre}`}>
                                <button className="loan">Louer</button>
                            </Link>
                    </div>
                </div>
            ))}
        </div>
        <Link href="/">
            Retour
        </Link> 
        </>
    )
}