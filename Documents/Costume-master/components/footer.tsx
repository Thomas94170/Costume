import React from "react";
import { Raleway } from '@next/font/google'
import { Poppins } from "@next/font/google";
import { Unbounded } from '@next/font/google'
import { motion } from 'framer-motion'

const text = Raleway({ subsets: ['latin'] })
const title = Unbounded({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className= "text-center">
      <p className="text-black">© 2021, Built with Next.js</p>
    </footer>
  );
}