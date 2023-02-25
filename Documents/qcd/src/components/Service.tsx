import React from 'react';

export default function Service(){

    return(
        <>
        <div className="w-full sm:w-full max-w-full bg-white mt-10 border border-gray shadow-lg shadow-gray-500/50">
            
            <div className="grid grid-cols-2 gap-4">
                <div className="h-200 flex items-center justify-center titreServ">
                    <p className='content-center text-center text-white text-6xl'>Nos Services</p>
                </div>
                <div className="h-200 bg-gray-400 scale-75 hover:scale-100 duration-700 liv">
                    <img src='https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='image'/>
                </div>
            </div>
            <div className='text-center m-10'>
                <p className='phrase'>QCD TRANSPORT vous accompagne pour vos livraisons régulières ou urgentes 7/7</p>
                <br/>
                <h1 className='text-2xl titleA'>Transport express de marchandises pour les professionnels</h1>
                <p className='phrase'>Nous livrons vos palettes, colis et marchandises dans le respect strict de votre cahier des charges.</p>
                <br/>
                <h3 className='text-2xl titleB'>Livraison de vos colis personnels </h3>
                <p className='phrase'>Vous souhaitez envoyer vos colis en France ou à l'international, QCD TRANSPORT s'engage à ce que votre colis arrive dans les meilleures conditions.</p>
                <br/>
                <h3 className='text-2xl titleC'>Déménagement</h3>
                <p className='phrase'>Nous assurons le transport de vos biens dans le cadre de votre déménagement partout en France 7J/7. </p>
            </div>
        </div>
        
        </>
    )
}