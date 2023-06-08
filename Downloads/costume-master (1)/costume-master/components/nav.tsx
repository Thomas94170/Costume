import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Poppins } from '@next/font/google'
import { Unbounded } from '@next/font/google'
import axios from "axios";
import { motion } from 'framer-motion'
import styles from '../app/page.module.css'

const title = Unbounded({ subsets: ['latin'] })

//const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

export default function Nav() {

  const [userData, setUserData] = useState(null);
  const token = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Faites votre requête pour récupérer les données de l'utilisateur
        // Utilisez le token pour authentifier la demande
        // Assurez-vous que l'endpoint et les détails de la requête sont corrects
        const response = await fetch("http://localhost:5400/user/checkCredentials", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log('message ligne 34' + userData)
          setUserData(userData);
          // Stockez les données de l'utilisateur dans le localStorage
          window.localStorage.setItem("userData", JSON.stringify(userData));
        } else {
          console.error("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);



  return (
    <nav className={`${title.className} flex text-center space-y-6 text-md text-black flex-col uppercase list-none`}>
      
        <li>
          <Link href="/connexion">
            Mon compte
          </Link> 
        </li>
    
      <li>
      <Link href="/lieu">
        le lieu
      </Link> 
      </li>
      <li>
      <Link href="/contact">
        contact
      </Link> 
      </li>
      <li>
      <Link href="/galerie">
        galerie
      </Link> 
      </li>
      <li>
      <Link href="/location">
        location
      </Link> 
      </li>
      <li>
        <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">instagram</a>
      </li>
    </nav>
  );
}