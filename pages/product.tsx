import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import querystring from "querystring";
import { getCostumeByTitle } from "./api/api";

function Product() {
  const router = useRouter();

  // Récupérer les paramètres de l'URL avec querystring
  const { title } = querystring.parse(router.asPath.split(/\?/)[1]);

  // Utiliser le titre pour récupérer les données du costume dans votre base de données
  const fetchCostume = async () => {
    const costume = await getCostumeByTitle(title);
    return costume;
  };

  const costume = fetchCostume();

  return (
    <>
      <h1>{costume.titre}</h1>
      <p>{costume.description}</p>
      <p>{costume.prix} €/jour</p>
      {/* Autres éléments d'interface utilisateur pour afficher les données du costume */}
      <br/>
      <Link href="/">
            Retour
        </Link> 
    </>
  );
}

export default Product;
