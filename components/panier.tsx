import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';

function Panier({ cartItems ={} }) {
    console.log("cartItems", cartItems);

   

    const cart = cartItems && Object.entries(cartItems).map(([titre, { count, prix }]) => {
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

  const prixTotalPanier = Object.entries(cartItems).reduce(
    (total, [_, { count, prix }]) => total + count * prix,
    0
  );
 //incrémenter le panier 
 const handleIncrement = (titre) => {
  const updatedCartItems = { ...cartItems };
  updatedCartItems[titre].count += 1;

  // Mise à jour du localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  window.location.reload(); // Recharge la page pour afficher les changements
};

//soustraire un article du panier

const handleDesincrement =(titre) =>{
  const updatedRemovedCartItems = {...cartItems};
  updatedRemovedCartItems[titre].count -=1;

  if (updatedRemovedCartItems[titre].count === 0) {
    delete updatedRemovedCartItems[titre];
  }

  //Mise à jour du localStorage
  localStorage.setItem('cart', JSON.stringify(updatedRemovedCartItems));
  window.location.reload();
}

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
                <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">Passer au paiement</button>
                
            </div>
        </div>
      
     
    </>
  );
  
}

  


export default Panier;
