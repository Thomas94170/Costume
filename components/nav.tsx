import React from "react";
import Link from "next/link";
import { Poppins } from '@next/font/google'
import { Unbounded } from '@next/font/google'
import { motion } from 'framer-motion'
import styles from '../app/page.module.css'

const title = Unbounded({ subsets: ['latin'] })

export default function Nav() {
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