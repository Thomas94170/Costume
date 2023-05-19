import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Panier from "@/components/panier";
import Footer from "@/components/footer";
import Logout from "@/components/logout";


export default function Achat (){
  const router = useRouter();
    let cartItems = {};
if (typeof window !== "undefined") {
  cartItems = JSON.parse(localStorage.getItem("cart")) || {};
  console.log(localStorage.getItem("cart")) 
}

const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

useEffect(() => {
  if (!isLogged) {
    router.push('/connexion'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
  }
}, [isLogged, router]);

if (!isLogged) {
  return null; // Affiche une page vide pendant la redirection
}

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
        <Panier cartItems={cartItems}/>
        <Link href='/location'>Retour</Link>
        <Footer/>

        </>
    )

   
  }

  