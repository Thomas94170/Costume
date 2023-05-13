import React from "react";
import {useRouter} from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export default function Logout(){

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Supprimer le token du localStorage
        router.push("/"); // Rediriger l'utilisateur vers la page d'accueil
      };

    return(
        <div className="">
         <button onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </button>
        </div>
    )
}