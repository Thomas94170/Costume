import React from "react";
import Link from "next/link";

export default function Utilisation(){

    const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;

    return(
        <>
        {isLogged && 
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              </div>
              }
        <div className="m-10 text-center">
        <h2 className="text-xl">CONDITIONS GENERALES D' UTILISATION</h2>
        <br/>
        <p>En utilisant ce site web, vous acceptez les présentes conditions générales d'utilisation 
            (CGU). Si vous n'acceptez pas ces CGU, veuillez cesser d'utiliser ce site web.
        </p>
        <br/>
        <p>Le site [nom du site] est hébergé sur les serveurs de [nom du fournisseur d'hébergement]. 
            L'utilisation de ce site implique l'acceptation de la politique de confidentialité et 
            des conditions générales d'utilisation du fournisseur d'hébergement. 
            [nom du créateur du site] décline toute responsabilité en cas de dysfonctionnement 
            ou d'interruption du service d'hébergement.
        </p>
        <br/>
        <p>Propriété intellectuelle</p>
        <p>Le contenu de ce site web, y compris mais sans s'y limiter, les textes, les images, 
            les vidéos, les graphiques, les logos, les marques, les codes et les logiciels, 
            est la propriété exclusive de [nom de l'entreprise] ou de ses partenaires. 
            Ce contenu est protégé par les lois sur la propriété intellectuelle et ne peut 
            être utilisé sans l'autorisation préalable écrite de [nom de l'entreprise].
        </p>
        <br/>
        <p>Utilisation du site web</p>
        <p>Vous vous engagez à utiliser ce site web conformément aux lois applicables et aux présentes CGU. 
            Vous vous engagez également à ne pas utiliser ce site web à des fins illégales ou 
            nuisibles, ou pour des activités qui pourraient nuire à la sécurité ou à 
            l'intégrité de ce site web ou des systèmes informatiques de [nom de l'entreprise] 
            ou de ses partenaires.
        </p>
        <br/>
        <p>Responsabilité</p>
        <p>Ce site web est fourni "tel quel" et [nom de l'entreprise] ne peut garantir 
            que ce site web sera exempt d'erreurs, de virus ou d'autres composants nuisibles. 
            [nom de l'entreprise] ne pourra en aucun cas être tenu responsable des dommages 
            directs ou indirects, y compris mais sans s'y limiter, les pertes de profits, 
            la perte de données ou toute autre perte financière résultant de l'utilisation de 
            ce site web.
        </p>
        <br/>
        <p>Protection des données personnelles</p>
        <p>[nom de l'entreprise] collecte et traite les données personnelles des utilisateurs 
            conformément aux lois applicables. Les utilisateurs peuvent consulter la politique 
            de confidentialité de [nom de l'entreprise] pour en savoir plus sur la manière dont 
            leurs données personnelles sont collectées et traitées.
        </p>
        <br/>
        <p>Modification des CGU</p>
        <p>[nom de l'entreprise] se réserve le droit de modifier à tout moment les présentes CGU. 
            Les modifications entreront en vigueur dès leur publication sur ce site web. 
            Il est de la responsabilité des utilisateurs de consulter régulièrement les CGU 
            afin de prendre connaissance des éventuelles modifications.
        </p>
        <br/>
        <p>Droit applicable et juridiction compétente</p>
        <p>Les présentes CGU sont régies et interprétées conformément aux lois du [pays]. 
            Tout litige découlant de l'utilisation de ce site web sera soumis à la compétence 
            exclusive des tribunaux du [ville].
        </p>
        </div>
        <br/>
        <br/>
        <Link href="/">Retour</Link>
        <br/>
        </>
    )
}