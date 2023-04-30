import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import "../app/globals.css"


export default function Formulaire(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const response = await axios.post(
        `http://localhost:5400/user`,
        {
          email,
          mdp: password,
        }
      );
      const data = response.data;
      
      if (response.status === 200 && data) {
        console.log(data)
        const token = response.data[0].token;
        console.log(token)
        
        const userInfoResponse = await axios.get("http://localhost:5400/getUserInfo", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        console.log(token)
        const userInfo = userInfoResponse.data;
        router.push(`/profil/${userInfo.email}`); // Rediriger vers la page profil
        console.log(userInfo);
      } else {
        setError("Identifiants invalides");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  

  //à l'intérieur de la const handleSubmit je récupère le token qui a été générer lors de la connexion
  //je récupère toute les infos du user connecté qui devront etre dans le body de la réponse
  //mettre une deuxieme fetch localhost: 5400/getUser avec toute les infos
  //router.push disparait et c est la ou vient le nouveau fetch qui aura aussi dans le body de sa réponse le token généré

   
    return(
        <>
        <h1 className="text-lg font-medium leading-6 text-gray-900 titleContact">
                 Connexion à mon compte
                </h1>
        <br/>
       <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="bg-gray-600 px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse Mail
                    </label>
                    <input
                      required
                      type="text"
                      name="email-address"
                      id="email-address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mot de Passe
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="flex justify-end">
          
          <button
            
            type="submit"
            className=" evenement ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
              Se connecter
            </button>
          </div>
          <div className="flex justify-end mt-10"> 
            <Link href="/nouveau">
                Pas de compte? créez en un ici ! 
            </Link> 
          </div>
        </form>

        <Link href="/">
        Retour
      </Link> 
        
       </>
    )
}