import React from 'react';

function Panier({ cartItems ={} }) {
    console.log("cartItems", cartItems);
    const cart = cartItems && Object.entries(cartItems).map(([titre, { count, prix }]) => {
      const total = count * prix; 
     
    return (
      <div key={titre}>
        
        <p>{count} x {titre}</p>
        <p>{total} €</p>
        
        
        
       
      </div>
    );
  });

  const prixTotalPanier = Object.entries(cartItems).reduce(
    (total, [_, { count, prix }]) => total + count * prix,
    0
  );

  return (
    <>
    <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-300 p-6 rounded-md shadow-lg">
                <h2>Résumé de mon panier</h2>
                {cart.length > 0 ? (
        <div>
          {cart}
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
