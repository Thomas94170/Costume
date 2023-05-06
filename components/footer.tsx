import React from "react";
import Link from "next/link";
import { Raleway } from '@next/font/google'
import { Unbounded } from '@next/font/google'


const text = Raleway({ subsets: ['latin'] })
const title = Unbounded({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className= "text-center">
      <div className="flex justify-around ">
      <Link href="/ventes">Conditions générales de vente</Link>
      <Link href="/utilisation">Conditions générales d'utilisation</Link>
      <Link href="/confidentialite">Politique de confidentialité</Link>
</div>
      <p className="text-black">© 2021, Built with Next.js</p>
    </footer>
  );
}