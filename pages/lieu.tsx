import FadeA from "@/components/fadeA";
import FadeB from "@/components/fadeB";
import FadeC from "@/components/fadeC";
import FadeD from "@/components/fadeD";
import FadeE from "@/components/fadeE";
import FadeG from "@/components/fadeG";
import Footer from "@/components/footer";
import React from "react";
import Link from "next/link";
import "../app/globals.css"
import Logout from "@/components/logout";

export default function Lieu(){

    const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

    return(
        <>
        {isLogged && 
        <>
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              </div>
              <Logout/>
              </>
              }
        <FadeA/>
        <FadeB/>
        <FadeC/>
        <FadeD/>
        <FadeE/>
        <br/>
        <FadeG/>
        <br/>
        <br/>
        <Link href='/'>Retour</Link>
        <Footer/>
        </>
    )
}