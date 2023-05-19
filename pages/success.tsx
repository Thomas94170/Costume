import React from "react";
import  Link  from "next/link";
import { useEffect, useState } from "react";



function generateRandomCode() {
    // Générer 5 chiffres aléatoires
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
  
    // Générer une lettre aléatoire
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
    // Générer un chiffre aléatoire
    const randomDigit = Math.floor(Math.random() * 10);
  
    // Concaténer les chiffres et la lettre pour former le code
    const code = `${randomNumber}-${randomLetter}-${randomDigit}`;
  
    return code;
  }

export default function Success(){
    const numCommand = generateRandomCode()
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
      const token = window.localStorage.getItem("token");
      setIsLogged(token !== null);
    }, []);

    if (!isLogged) {
      return (
        <>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-gray-300 p-6 rounded-md shadow-lg">
            <p className="text-3xl text-center">Oupsss... Vous ne devriez pas être là !</p>
              <Link href="/">Retour</Link>
          </div>
        </div>

        </>
      );
    }

    return(
        <>
       <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-300 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl text-center">Paiement Réussi !</h2>
          <br />
        <p className="text-center">Votre numéro de commande : </p>
         <br/>
         <p className="text-center"> {numCommand} </p>
         <br/>
         <p className="text-center">Veuillez consulter vos mails, 
            un récapitulatif vous est envoyé à l'adresse enregistré sur votre compte
          </p>
   <br/>
   <div className="text-center">
   <Link href='/'>Fermer cette fenêtre et revenir à l'accueil du site</Link>
   </div>
  <br/>
 
        </div>
      </div>
        </>
    )
}