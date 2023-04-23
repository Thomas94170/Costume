
import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../app/globals.css"


export default function Formulaire(){
  const [email, setEmail] = useState("");
  const [mdp, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5400/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mdp }),
      });
  
      if (response.ok) {
        // Check if user exists in database
        const user = await response.json();
        if (user) {
          // Redirect to profile page if login is successful
          window.location.href = "/profil";
        } else {
          setError("Adresse mail ou mot de passe incorrect");
        }
      } else {
        setError("Adresse mail ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Une erreur s'est produite, veuillez réessayer plus tard");
    }
  };
  
 
  

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
                      onChange={handleEmailChange}
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
                      value={mdp}
                      onChange={handlePasswordChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-end">
          
            <button
              type="submit"
              className=" evenement ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Soumettre
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