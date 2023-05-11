import React from "react";
import Link from "next/link";
import Panier from "@/components/panier";
import Footer from "@/components/footer";


export default function Achat (){
    let cartItems = {};
if (typeof window !== "undefined") {
  cartItems = JSON.parse(localStorage.getItem("cart")) || {};
  console.log(localStorage.getItem("cart")) 
}

const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

    return(
        <>
        {isLogged && 
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              </div>
              }
        <Panier cartItems={cartItems}/>
        <Link href='/location'>Retour</Link>
        <Footer/>

        </>
    )
}