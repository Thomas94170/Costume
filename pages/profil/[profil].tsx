import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "@/components/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";



export default function Profil(){
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [divVisible, setDivVisible] = useState(false);
  const [cmdVisible, setCmdVisible] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();




  const handleClick = () => {
    setDivVisible(true);
    setCmdVisible(false); // ferme automatiquement la div "Voir mes commandes" si elle est ouverte
  }

  const ReturnClick = () => {
    setDivVisible(false);
  }

  const buttonClick =()=>{
    setCmdVisible(true);
    setDivVisible(false); // ferme automatiquement la div "Modifier mon profil" si elle est ouverte
  }

  const buttonReturnClick = ()=>{
    setCmdVisible(false)
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Rediriger vers la page de login si le token n'est pas présent dans le localStorage
      console.log('erreur token ici')
      return;
    }
  
    const fetchUserInfo = async () => {
      try {
        const userInfoResponse = await axios({method:"post", url:"http://localhost:5400/user/getUserInfo", 
        headers: { "Authorization":'Bearer '+token}
      });
        const userInfo = userInfoResponse.data;
        setUserInfo(userInfo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprimer le token du localStorage
    router.push("/"); // Rediriger l'utilisateur vers la page d'accueil
  };


  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      await axios({
        method: "patch",
        url: `http://localhost:5400/user/${id}`,
        headers: { "Authorization":'Bearer '+token},
        data: {
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
        },
      });
      alert("Modifications enregistrées avec succès !");
    } catch (error) {
      console.error(error);
    }
  };

  if (!userInfo) {
    return <Loading/>;
  }
  const { id, prenom, nom, email } = userInfo;

  
  
  return (
    <>
     <div className="flex justify-start items-start h-screen">
            <div className="fixed inset-y-0 left-0 bg-gray-300 p-6 rounded-md shadow-lg">
                <p>{nom}</p>
                <p>{prenom}</p>
                <p>{email}</p>
                <br/>
                <button className=" border border-black rounded-md bg-black text-white px-3 py-3"
                 onClick={handleClick}>
                  Modifier mes infos
                </button>
                <br/>
                <br/>
                <button className="border border-black rounded-md bg-black text-white px-3 py-3"
                onClick={buttonClick}>
                  Voir mes commandes
                </button>
                <br/>
                <br/>
                <div className="">
                  <button onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </button>
                </div>
            </div>
      </div>
      {divVisible || cmdVisible ? (
  <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
    <div className="bg-gray-300 p-6 rounded-md shadow-lg">
      {divVisible && (
        <div className="modif-profil">
          <p className="text-center">Modifier mon profil</p>
          <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nom">Nom:</label>
                <input
                  type="text"
                  defaultValue={nom}
                  {...register("nom", { required: true })}
                />
                {errors.nom && <span>Ce champ est requis</span>}
                <br />
                <label htmlFor="prenom">Prénom:</label>
                <input
                  type="text"
                  defaultValue={prenom}
                  {...register("prenom", { required: true })}
                />
                {errors.prenom && <span>Ce champ est requis</span>}
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  defaultValue={email}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Ce champ est requis</span>}
                <br />
                <input
                  type="submit"
                  value="Valider"
                  className="border border-black rounded-md bg-black text-white px-3 py-3 mt-4"
                />
                <button
                  type="button"
                  className="border border-black rounded-md bg-black text-white px-3 py-3 mt-4 ml-4"
                  onClick={reset}
                >
                  Annuler
                </button>
              </form>
              <br/>
          <button
            className="border border-black rounded-md bg-black text-white px-3 py-3"
            onClick={ReturnClick}
          >
            Fermer
          </button>
        </div>
      )}
      {cmdVisible && (
        <>
          <p>Voir mes commandes</p>
          <button
            className="border border-black rounded-md bg-black text-white px-3 py-3"
            onClick={buttonReturnClick}
          >
            Fermer
          </button>
        </>
      )}
    </div>
  </div>
) : null}

      </>
)
}
