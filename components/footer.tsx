import React from "react";
import Link from "next/link";
import { Raleway } from '@next/font/google'
import { Unbounded } from '@next/font/google'
import NewsletterForm from "./newsletter";


const text = Raleway({ subsets: ['latin'] })
const title = Unbounded({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className= "text-center">
      <div className="flex justify-around ">
        <div className="ml-5 mr-5">
        <Link href="/ventes">Conditions gen de vente</Link>
        </div>
        <div className="ml-5 mr-5">
        <Link href="/utilisation">Conditions gen d'utilisation</Link>
        </div>
        <div className="ml-5 mr-5">
        <Link href="/confidentialite">Politique de confidentialité</Link>
        </div>
      
      
      <NewsletterForm/>
</div>
      <p className="text-black">© 2021, Built with Next.js</p>
    </footer>
  );
}