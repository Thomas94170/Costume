import React from "react";
import { useState, useEffect } from "react";


export default function Magalerie() {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            // Appel de l'API route pour récupérer les données
            const response = await fetch('http://localhost:5500/gallerie');
            const jsonData = await response.json();
    
            setData(jsonData);
          } catch (err) {
            console.log(err);
          }
        }
    
        fetchData();
      }, []);
  return (
   <>
   <div className="grid grid-cols-3 gap-4  m-3">
            {data.map((item) => (
                <div  key={item.id}>
                    <div className=" ">
                        
                            <div className="flex justify-center ">
                                <img className="img-galerie m-2 rounded-md hover:scale-150 transition duration-300 ease-out" src={item.imageGallerie} alt={item.id}></img>
                                
                            </div>
            
                           
                    </div>
                </div>
            ))}
        </div>
   </>
  );
}