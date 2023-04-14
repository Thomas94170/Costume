import React from "react";
import Link from "next/link";


export default function Panier (){
    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-300 p-6 rounded-md shadow-lg">
                <h2>Résumé de mon panier</h2>
                <button className="bg-black text-white py-2 px-4 rounded mt-4 mb-4">Passer au paiement</button>
                
            </div>
        </div>

        </>
    )
}