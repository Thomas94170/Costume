import React from "react";
import Link from "next/link";

export default function Vente(){
    return(
        <>
        <div className="m-10 text-center">
            <h2 className="text-xl">CONDITIONS GENERALES DE VENTE</h2>
            <br/>
            <p>Article 1 : Champ d’application</p>
            <p>Les présentes conditions générales de vente s’appliquent à toutes 
                les locations de costumes proposées par Lokal Costume (ci-après « le Loueur ») à ses clients.
            </p>
            <br/>
            <p>Article 2 : Tarifs</p>
            <p>Les tarifs des locations de costumes sont précisés sur le site internet 
                [adresse du site internet du Loueur] ou en boutique. 
                Ils sont indiqués toutes taxes comprises et sont soumis
                à modification sans préavis. Les tarifs sont ceux en vigueur au moment de 
                la réservation.
            </p>
            <br/>
            <p>Article 3 : Réservation</p>
            <p>Le client doit effectuer une réservation préalable pour louer un costume. 
                La réservation peut se faire en ligne sur le site internet du Loueur ou 
                en boutique. Le client doit fournir toutes les informations nécessaires 
                à la location (nom, prénom, adresse, numéro de téléphone, adresse e-mail, 
                etc.) ainsi que les dates de location souhaitées. La réservation n’est 
                définitive qu’après validation par le Loueur et le paiement d’un acompte.
            </p>
            <br/>
            <p>Article 4 : Paiement</p>
            <p>Le paiement de la location doit être effectué en totalité lors de la récupération 
                du costume. Le paiement peut être effectué en espèces ou par carte bancaire. 
                Le Loueur se réserve le droit de demander un dépôt de garantie pour la location 
                de certains costumes.
            </p>
            <br/>
            <p>Article 5 : Retrait et retour des costumes</p>
            <p>Le retrait et le retour des costumes doivent être effectués en boutique aux dates et heures 
                convenues lors de la réservation. Le Loueur se réserve le droit de facturer des pénalités 
                en cas de retour tardif ou de dégradation du costume.
            </p>
            <br/>
            <p>Article 6 : Annulation</p>
            <p>En cas d’annulation de la réservation par le client, le Loueur peut conserver l’acompte versé 
                par le client. En cas d’annulation moins de 48 heures avant la date de location, le Loueur peut 
                facturer le montant total de la location.
            </p>
            <br/>
            <p>Article 7 : Responsabilité</p>
            <p>Le Loueur ne saurait être tenu pour responsable des dommages, pertes ou vols subis par le client pendant 
                la durée de la location. Le client est responsable de la garde et de l’utilisation du costume pendant la 
                durée de la location. En cas de dégradation ou de perte du costume, le client s’engage à indemniser le Loueur.
            </p>
            <br/>
            <p>Article 8 : Litiges</p>
            <p>Tout litige relatif à la location de costumes est soumis au droit français. En cas de litige, le client peut recourir 
                à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.
            </p>
            <br/>
            <p>Article 9 : Protection des données personnelles</p>
            <p>Le Loueur s’engage à respecter la réglementation en vigueur sur la protection des données personnelles 
                et à ne pas communiquer les données personnelles du client à des tiers.
            </p>
            <br/>
            <p>ARTICLES DE LOI PERTINENTS</p>
            <p>Code civil : articles 1710 à 1713 relatifs au contrat de louage</p>
            <p>Code de la consommation : articles L. 121-16 à L. 121-20 relatifs au droit de rétractation</p>
            <p>Code pénal : articles 311-1 à 311-16 relatifs aux atteintes aux biens et propriétés</p>
        </div>
        <br/>
        <br/>
        <Link href="/">Retour</Link>
        <br/>
        <br/>
        </>
    )
}