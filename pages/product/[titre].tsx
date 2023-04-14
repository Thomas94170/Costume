import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter} from "next/router";
import { getCostumeByTitle } from "../api/api";
import { GetStaticPropsContext } from 'next';
import Loading from "@/components/loading";
import Footer from "@/components/footer";
import Cart from "@/components/cart";


interface Costume {
  titre: string;
  description: string;
  imageUne: string;
  imageDeux: string;
  prix: string;
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ titre: string }>) {
  const costume = await getCostumeByTitle(params.titre);
  console.log(params)
  console.log(costume)
  return { props: { costume } };
  
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

function Product({ costume }: {costume:Costume}) {
  const router = useRouter();
  console.log(costume)
  const [clickCount, setClickCount] = useState(0); // Initialise le compteur de clics à 0
  const [errorMessage, setErrorMessage] = useState("");
  
  


  const handleAddToCart = () => {
    if (clickCount < 3) {
      setClickCount((prevClickCount) => prevClickCount + 1);
      //setClickCount(clickCount + 1);
      setErrorMessage("");
      
    } else {
      setErrorMessage("Le produit n'est disponible qu'en 3 exemplaires.");
    }
  };
  if (router.isFallback) {
    return <Loading/>;
  }

  if (!costume) {
    return <p>Costume not found</p>;
  }
  

  return (
    <>
    <div className="resume">
        <div className="prod1">
            <h1 className="text-center mb-3 text-2xl">{costume.titre}</h1>
            <p className="text-center">{costume.description}</p>
          <div className=" flex justify-center">
            <img className="img-product m-2" src={costume.imageUne} alt={costume.titre} />
            <img className="img-product m-2" src={costume.imageDeux} alt={costume.titre} /> 
          </div>
          <p className="text-center">{costume.prix} €/jour</p>
        </div>
        <div className="fenetre border border-black rounded-md bg-gray-200">
          <div className="flex flex-col">
            <Cart count={clickCount}/>
            <br/>
            <br/>
            <div>Produit sélectionné</div>
            <div>
              {clickCount > 0 && 
                <div>
                 {clickCount} produit(s) ajouté(s) au panier.
                 <p className="text-center">{costume.titre}</p>
                 <img className="img-product m-2" src={costume.imageUne} alt={costume.titre} />
                </div>
                
              }
             {errorMessage && <div>{errorMessage}</div>}
            <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4" onClick={handleAddToCart}>
              Ajouter au panier
            </button>
            <Link href={""}>
              <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">Voir mon panier</button>
            </Link>
          </div>
        </div>
</div>
    
        
      </div>
      <br/>
      <br/>
      <br/>
      <Link href='/location'>Retour</Link>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}

export default Product;
