import React from "react";
import  Link  from 'next/link';
import Image from "next/image";
import wigs from "../images/wigs.jpg"

export default function Explain(){
    return(
        <>
    <section>
        <div className="contain ">
            <div className="diva">
                <p>
   
                    Avec ma boutique, vous pouvez louer n'importe quel type de costume pour les professionnels de l'audiovisuel et du cinéma. 
                    Nous disposons d'une vaste gamme de produits dans toute la France et nous proposons un service de référencement en ligne 
                    pour trouver et choisir les costumes qui vous conviennent le mieux. Notre service de prêt est très rapide et efficace et 
                    nous vous promettons un service de qualité. Vous pouvez être sûr que nos costumes seront à la hauteur de vos exigences. 
                    N' hésitez pas à nous contacter pour toutes questions ou informations supplémentaires. Nous serons ravis de vous aider.
                </p>
            </div>
            <div className="divb">
            <Image 
  style={{
    backgroundSize: 'cover',
    
  }} 
  src={wigs}
  alt ='cover' 
/>
            </div>
            <div className="divc">
            <Link href="/location">
  <button className="loan">Louer nos costumes</button>
</Link>
            </div>
        </div>
    </section>
        
        </>
    )
}