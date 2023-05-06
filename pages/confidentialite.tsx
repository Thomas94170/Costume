import React from "react";
import Link from "next/link"

export default function Confidentialite(){
    return(
        <>
        <div className="m-10 text-center">
        <h2 className="text-xl">POLITIQUE DE CONFIDENTIALITE</h2>
        <br/>
        <p>La présente politique de confidentialité décrit comment [nom de la société] 
            collecte, utilise et protège les informations personnelles que vous fournissez 
            sur le site web [nom du site]. Nous prenons la protection de vos données 
            personnelles très au sérieux et nous nous engageons à respecter votre vie privée.
        </p>
        <br/>
        <p>Collecte et utilisation des informations personnelles</p>
        <p>Nous collectons des informations personnelles lorsque vous utilisez notre site web, 
            passez une commande, vous inscrivez à notre newsletter ou remplissez un formulaire 
            en ligne. Ces informations peuvent inclure votre nom, votre adresse e-mail, 
            votre adresse postale, votre numéro de téléphone et vos informations de paiement.
        </p>
        <br/>
        <p>Nous utilisons ces informations pour :</p>
        <ol>
            <li>Traiter vos commandes et gérer votre compte</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Vous contacter pour des offres spéciales ou des promotions</li>
            <li>Vous envoyer des newsletters et des informations sur nos produits.</li>
        </ol>
        <br/>
        <p>Protection des informations personnelles</p>
        <p>Nous prenons les mesures de sécurité appropriées pour protéger vos informations personnelles 
            contre la perte, l'utilisation abusive ou la modification non autorisée. Nous 
            stockons les informations que vous nous fournissez sur des serveurs sécurisés et 
            nous limitons l'accès à ces informations aux employés qui ont besoin de les 
            connaître pour traiter vos commandes.
        </p>
        <br/>
        <p>Divulgation des informations personnelles à des tiers</p>
        <p>Nous ne vendons pas, ne louons pas et ne divulguons pas vos informations personnelles à des tiers, sauf si nous 
            sommes tenus de le faire par la loi ou si cela est nécessaire pour traiter votre 
            commande (par exemple, pour livrer votre commande à une société de transport).
        </p>
        <br/>
        <p>Cookies</p>
        <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site web et pour nous aider 
            à comprendre comment vous interagissez avec notre site web. Les cookies sont des 
            fichiers texte qui sont placés sur votre ordinateur ou votre appareil mobile 
            lorsque vous visitez notre site web. Vous pouvez désactiver les cookies dans les 
            paramètres de votre navigateur, mais cela peut affecter votre expérience sur notre 
            site web.
        </p>
        <br/>
        <p>Liens vers d'autres sites web</p>
        <p>Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas exploités par nous. 
            Nous n'avons aucun contrôle sur ces sites web et nous ne sommes pas responsables de leur contenu ou 
            de leurs pratiques en matière de confidentialité. Nous vous recommandons de lire la politique de 
            confidentialité de tout site web que vous visitez.
        </p>
        <br/>
        <p>Modifications de la politique de confidentialité</p>
        <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Nous vous informerons des modifications importantes de cette politique de confidentialité en 
            publiant une notification sur notre site web ou en vous envoyant un e-mail.
        </p>
        <br/>
        <p>Contact</p>
        <p>Si vous avez des questions sur cette politique de confidentialité ou sur la manière dont 
            nous traitons vos informations personnelles, veuillez nous contacter à 
            [adresse e-mail ou postale].
        </p>
        <br/>
        <p>Dernière mise à jour : 05 mai 2023.</p>
        <br/>
        </div>
        <br/>
        <br/>
        <Link href='/'>Retour</Link>
        <br/>
        </>
    )
}