
import React from "react";
import Link from "next/link";
import axios from "axios";
import "../app/globals.css"
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Account  ()  {
  // je mets ici mon code pour la soumission du form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },watch
  } = useForm();

  const mdp = watch("mdp");
  const confirm = watch("confirm");

  const onSubmit = (data: any) => {
    if (mdp === confirm) {
      alert("compte enregistré.");
      return;
    }

    setIsSubmitting(true);

    console.log(data);
    alert(JSON.stringify(data));
    axios
      .post("http://localhost:5600/usersInfos", data)
      .then((response) => {
        console.log(response);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
      
  };




    return(
        <>
        <h1 className="text-lg font-medium leading-6 text-gray-900 titleContact">
                  Création de mon compte.
                </h1>
        <br/>
       <form
        onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action=""
          method="POST"
        >
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Informations personnelles
                </h3>
                
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>
                    <input
                     {...register("prenom", {
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                      required
                      type="text"
                      name="prenom"
                      id="prenom"
                      
                      className="mt-1 block w-fulNamel rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                     {errors.prenom && (
                  <span className="block text-sm font-medium text-red-700">
                    Ton prénom doit faire entre 3 et 20 caractères
                  </span>
                )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                     {...register("nom", {
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                      required
                      type="text"
                      name="nom"
                      id="nom"
                     
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                     {errors.nom && (
                  <span className="block text-sm font-medium text-red-700">
                    Ton nom doit faire entre 3 et 20 caractères
                  </span>
                )}
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse mail
                    </label>
                    <input
                     {...register("email", {
                      required: true,
                      minLength: 3,
                      maxLength: 30,
                      pattern: /.*@.*/
                    })}
                    required
                    type="text"
                    name="email"
                    id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                     {errors.email && (
                  <span className="block text-sm font-medium text-red-700">
                    Ton mail doit inclure @ et faire entre 3 et 20 caractères
                  </span>
                )}
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mot de passe
                    </label>
                    <input
                    {...register("mdp", {
                      required: true,
                      minLength: 12,
                      maxLength: 30,
                      pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                    })}
                      required
                      type="password"
                      name="mdp"
                      id="mdp"
                      
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                     {errors.mdp && (
                  <span className="block text-sm font-medium text-red-700">
                    Minimum 12 caractères avec 1 majuscule et 1 caractère spécial
                  </span>
                )}
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirmer Mot de Passe
                    </label>
                    <input
                      required
                      type="password"
                      name="confirm"
                      id="confirm"
                      
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
              disabled={isSubmitting}
              className=" evenement ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Soumettre
            </button>
          </div>
        </form>

        <Link href="/">
        Retour
      </Link> 
        
       </>
    )

    }