import React from "react";
import  Link  from "next/link";
import Logout from "@/components/logout";
import Paypal from "@/components/paypal";
import Footer from "@/components/footer";




const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

export default function Checkout(){
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
              <Paypal/>
             <Link href='/achat'>Retour</Link>
              <Footer/>
        </>
    )
}