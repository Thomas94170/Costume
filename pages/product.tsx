import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import querystring from "querystring";
import { getCostumeByTitle } from "./api/api";
import "../app/globals.css";
import Loading from "@/components/loading";
import Footer from "@/components/footer";

function Product() {
    const router = useRouter();

    // Récupérer les paramètres de l'URL avec querystring
    const { title } = querystring.parse(router.asPath.split(/\?/)[1]);
  
    const [costume, setCostume] = useState(null);
    const [error, setError] = useState(null);
  
    // Utiliser le titre pour récupérer les données du costume dans votre base de données
    const fetchCostume = useCallback(async () => {
      try {
        console.log('Fetching costume data...');
        const costumeData = await getCostumeByTitle(title);
        console.log('Costume data retrieved:', costumeData);
        setCostume(costumeData);
        console.log(getCostumeByTitle(title));
        setError(null);
      } catch (error) {
        console.error('Error fetching costume data:', error);
        setError(error.message);
      }
    }, [title]);
  
    useEffect(() => {
      console.log('useEffect called');
      console.log(costume)
      fetchCostume();
    }, [fetchCostume]);
  
    if (error) {
      return <p>Une erreur est survenue : {error}</p>;
    }
  
    if (!costume) {
      return <Loading />;
    }
    return (
        <>
          {costume ? (
            <>
              <h1>{costume.titre}</h1>
              <p>{costume.description}</p>
              <img src={costume.imageUne} alt={costume.titre} />
              <img src={costume.imageDeux} alt={costume.titre} />
              <p>{costume.prix} €/jour</p>
              <br />
              <Link href="/">Retour</Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </>
          ) : (
            <Loading />
          )}
        </>
      );
  

  
}

export default Product;
