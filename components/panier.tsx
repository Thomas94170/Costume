import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Panier({ cartItems = {} }) {
  const [prixTotalPanier, setPrixTotalPanier] = useState(0);
  const [updatedCartItems, setUpdatedCartItems] = useState({});

  useEffect(() => {
    const total = Object.entries(updatedCartItems).reduce(
      (acc, [_, { count, prix }]) => acc + count * prix,
      0
    );
    setPrixTotalPanier(total);
    localStorage.setItem('prixTotalPanier', total); // Stocker la valeur dans le localStorage
  }, [updatedCartItems]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setUpdatedCartItems(JSON.parse(savedCartItems));
    } else {
      setUpdatedCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }, [updatedCartItems]);

  const handleIncrement = (titre) => {
    const updatedItems = { ...updatedCartItems };
    updatedItems[titre].count += 1;

    setUpdatedCartItems(updatedItems);
  };
   

  
  const handleDesincrement = (titre) => {
    const updatedItems = { ...updatedCartItems };
    updatedItems[titre].count -= 1;

    if (updatedItems[titre].count === 0) {
      delete updatedItems[titre];
    }

    setUpdatedCartItems(updatedItems);
  };


    console.log("cartItems", cartItems);

   

    const cart = Object.entries(updatedCartItems).map(([titre, { count, prix }]) => {
      const total = count * prix;
  
     
    return (
      <div key={titre}>
        
        <span className='m-2'>{count} x {titre}</span>
        <span className='m-2'><button onClick={() => handleDesincrement(titre)}><FontAwesomeIcon icon={faMinus} /></button></span>
        <span className='m-2'><button onClick={() => handleIncrement(titre)}><FontAwesomeIcon icon={faPlus} /></button></span>
        <p>{total} €</p>
        
        
        
       
      </div>
    );
  });

 


  return (
    <>
    <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-300 p-6 rounded-md shadow-lg">
                <h2 className='text-2xl'>Résumé de mon panier</h2>
                <br/>
                {cart.length > 0 ? (
        <div>
          {cart}
          <br/>
          <p>Prix total du panier: {prixTotalPanier} €</p>
        </div>
      ) : (
        <p>Le panier est vide.</p>
      )}
                <Link href='/location'>
              <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">
                Ajouter d'autres articles
              </button>
            </Link>
            <br/>
                
                <Link href='/checkout'>
                <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">Passer au paiement</button>
            </Link>
            </div>
        </div>
      
     
    </>
  );
  
}

  


export default Panier;
