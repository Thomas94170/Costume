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
    return(
        <>
        <Panier cartItems={cartItems}/>
        <Link href='/location'>Retour</Link>
        <Footer/>

        </>
    )
}