import React from "react";
import  Link  from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import Logout from "@/components/logout";
import axios from "axios";
import jwt from 'jsonwebtoken';
//import  sendConfirmationEmail  from "../../be-lokalcostume/backend/mailer/mailer.js";





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
    const numCommand =generateRandomCode();
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);


    

  
   console.log(user)
   

    useEffect(() => {
      const token = window.localStorage.getItem("token");
      setIsLogged(token !== null);
      console.log(token);
     // setNumCommand(generateRandomCode());
     const userData = JSON.parse(localStorage.getItem("user"));
     const generatedNumCommand = generateRandomCode();
      saveOrder(token,  generatedNumCommand, userData);

      
      setUser(userData);

    }, []);


      const saveOrder = async (token, numCommand, userData) => {
      
      const decodedToken = jwt.decode(token);
      if (decodedToken ) {
        const { id, email, nom, prenom } = userData;
        console.log(userData);

        const prixTotalPanier = localStorage.getItem("prixTotalPanier") || 0;
      

        console.log(localStorage.getItem("prixTotalPanier"))

        const date = new Date().toISOString();
        const orderData = {
          userId : id,
          reference : numCommand,
          date : date,
          prix : prixTotalPanier,
       
        };
        console.log(orderData);
        try {
          await axios.post("http://localhost:5400/order/setOrders", orderData);
          console.log("Commande sauvegardée");
          sendConfirmationEmail(userData.email, numCommand);
        } catch (error) {
          console.error("Erreur dans la sauvegarde:", error);
        }
      }else{
        console.log('erreur ne fonctionne pas')
      }
    };

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
         {isLogged && 
            <>
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              </div>
              <Logout/>
              <br/>
             
             </>
              }
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
