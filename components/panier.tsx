import React from 'react';

function Panier({ cartItems ={} }) {
    console.log("cartItems", cartItems);
    const cart = cartItems && Object.entries(cartItems).map(([title, count]) => {
    return (
      <div key={title}>
        
        <p>{count} x {title}</p>
       
      </div>
    );
  });

  return (
    <>
    <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-300 p-6 rounded-md shadow-lg">
                <h2>Résumé de mon panier</h2>
                {cart}
                <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">Passer au paiement</button>
                
            </div>
        </div>
      
     
    </>
  );
}

export default Panier;
