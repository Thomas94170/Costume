import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter} from "next/router";
import { getCostumeByTitle } from "../api/api";
import { GetStaticPropsContext } from 'next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Loading from "@/components/loading";
import Footer from "@/components/footer";



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
      setErrorMessage("");
      
      // Ajouter le costume au localStorage
      const cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
      const newCount = cartItems[costume.titre] ? cartItems[costume.titre] + 1 : 1;
      cartItems[costume.titre] = newCount;
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      setErrorMessage("Le produit n'est disponible qu'en 3 exemplaires.");
    }
  };

 

  useEffect(() => {
    // Récupérer les articles ajoutés au panier depuis le localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
    const itemCount = cartItems[costume?.titre] || 0;
    setClickCount(itemCount);

    const timer = setTimeout(() => {
      localStorage.clear(); // vider le localStorage après 10 minutes
    }, 10 * 60 * 1000);
    return () => clearTimeout(timer);

  }, []);

  const cartItems = JSON.parse(
    typeof window !== 'undefined' && localStorage.getItem('cart') || '{}'
  );
  const cart = Object.entries(cartItems).map(([title, count]) => {
    return (
    <>
       <div key={title}>
        <p> <FontAwesomeIcon icon={ faShoppingCart } />{count} x {title}</p>
      </div>
    </>
     
    );
  });


  if (router.isFallback) {
    return <Loading/>;
  }

  if (!costume) {
    return <p>Costume not found</p>;
  }
  
  const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

  return (
    <>
    {isLogged && 
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              </div>
              }
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
            {cart}
            
            <br/>
            <br/>
            <div>
             {errorMessage && <div>{errorMessage}
            </div>}
            <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4" 
            onClick={handleAddToCart}>
              Ajouter au panier
            </button>
            <Link href='/achat'>
              <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">
                Voir mon panier
              </button>
            </Link>
            <Link href='/location'>
              <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">
                Ajouter d'autres articles
              </button>
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
