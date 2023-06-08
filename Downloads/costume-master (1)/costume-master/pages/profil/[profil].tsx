import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "@/components/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Etat from "@/components/etat";
import { motion, useScroll } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import styles from '../../app/page.module.css'
import Nav from "@/components/nav";





export default function Profil(){
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [orders, setOrders] = useState([]);
  const [divVisible, setDivVisible] = useState(false);
  const [cmdVisible, setCmdVisible] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const [isOpen, setIsOpen] = useState(false)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const navVariants = isSmallScreen ? 
  {
    open: {
      display: 'block', 
      top: 0,
      right: '10%',
      padding: '10%',
      marginTop: '140px',
      width: '80%',
      color: 'black',
      backgroundColor: 'hsl(15, 13%, 98%)',
      transition: {
        delay: .05,
        duration: .5,
      }
    },
    closed: {
      top: 0,
      right: '10%',
      marginTop: '5%',
      padding: '2.5%',
      width: '80%',
      color: 'black',
      display: 'none',
      backgroundColor: 'hsl(15, 13%, 98%)',
    },
  } 
  : {
    open: {
      display: 'block',
      top: '10%',
      right: '2%',
      padding: '2.5%',
      marginTop: '5%',
      minWidth: 'fit-content',
      width: '15%',
      color: 'black',
      backgroundColor: 'hsl(15, 13%, 98%)',
    },
    closed: {
      top: 0,
      right: '2%',
      padding: '2.5%',
      marginTop: '5%',
      minWidth: 'fit-content',
      width: '15%',
      color: 'black',
      display: 'none',
      backgroundColor: 'hsl(15, 13%, 98%)',
    }
  };
  
  const titleVariants = isSmallScreen ?
  {
    hidden: {
      color: 'black',
      background: 'transparent'
    },
    visible: {
      color: 'black',
      translateY: -380,
      background: 'transparent',
      transition: {
        delay: 1,
        duration: 1.5,
      }
    },
  }
  : {
    hidden: {
      color: 'black',
      background: 'transparent',
    },
    visible: {
      color: 'black',
      translateY: -380,
      background: 'transparent',
      transition: {
        delay: 1,
        duration: 1.5,
      }
    },
  }



  const isLogged = typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem("token") !== null;



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
    console.log(token);
    if (!token) {
      router.push("/login"); // Rediriger vers la page de login si le token n'est pas présent dans le localStorage
      console.log('erreur token ici')
      return;
    }

  
  
    const fetchOrderById = async (userId) => {
      console.log("ici")
      console.log(userId)
    try {
      
      const orderResponse = await axios({
        method: "get",
        url:
        `http://localhost:5400/order/`,
      });

      console.log("fonction fetchOrderById appelée")
      console.log(orderResponse + ' de fetchOrderById')
      const orders = orderResponse.data;
      console.log(orders)

      //filtrer tt les orders et les comparer pour afficher uniquement les userId correspondants
      const filteredOrders = orders.filter(order => order.userId === userId)
      setOrders(filteredOrders);
      console.log(filteredOrders);
    } catch (error) {
      console.error("message : " + error);
    }
  };
  
  const fetchUserInfo = async () => {
    console.log('fonction initialisée ici')
    try {
      // Récupérer les informations de l'utilisateur depuis votre adresse locale
      const userInfoResponse = await axios({
        method: "post",
        url: "http://localhost:5400/user/getUserInfo",
        headers: {
          "Authorization": "Bearer " + token,
         
        },
      });
      console.log('arret ici')
      const userInfo = userInfoResponse.data;
      console.log("Fonction fetchUserInfo appelée");
      console.log(userInfo);
      setUserInfo(userInfo);
  
      // Vérifier s'il existe des informations dans le stockage local
      const storedUserInfo = localStorage.getItem("userInfo");
      if (storedUserInfo) {
        console.log("Utilisation des informations de l'utilisateur stockées en local");
        console.log(userInfo);
        setUserInfo(userInfo);
        fetchOrderById(userInfo.id);
      } else {
        // Sauvegarder les informations de l'utilisateur dans le stockage local
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        fetchOrderById(userInfo.id);
      }
    } catch (error) {
      console.error(error);
      console.log('ne fonctionne pas ')
      
    }
  };
  
  
  
   // fetchOrders();
    fetchUserInfo();
  }, []);


 
 

  const handleLogout = () => {
    localStorage.removeItem("token"); // Supprimer le token du localStorage
    router.push("/"); // Rediriger l'utilisateur vers la page d'accueil
  };

//modification des infos avec le formulaire
  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      await axios({
        method: "patch",
        url: `http://localhost:5400/user/${id}`,
        headers: { "Authorization":'Bearer '+token,
       
      },
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
    <div className="coverContact">
                <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} 
                className={`${styles.menuToggle} fixed top-0 right-0 mt-4 mr-4 md-mt-8 md-mr-12 w-6 h-6 cursor-pointer`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                </motion.svg>

                <motion.div className="fixed top-0 right-0 mt-32 shadow-2xl rounded-md text-black bg-white" initial="closed" animate={isOpen ? "open" : "closed"}
                variants={navVariants} >
                <Nav />
                </motion.div>
            </div>
     <div className="flex justify-start items-start h-screen">
            <div className="fixed inset-y-0 left-0 bg-gray-300 p-6 rounded-md shadow-lg">
              {isLogged && 
              <div>
                 <div className="flex">
                <p className="inline-block">Connecté</p>
                <span className="inline-block mt-3 ml-2"><img src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png" height={10} width={10}/></span>
              </div>
              <br/>
              
              </div>
              
              }
              <br/>
              <br/>
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
                className="ml-2"
                  type="text"
                  defaultValue={nom}
                  {...register("nom", { required: true,
                    minLength: 1,
                    maxLength: 20, })}
                />
                {errors.nom && <span>Ce champ est requis</span>}
                <br />
                <label htmlFor="prenom">Prénom:</label>
                <input
                className="ml-2"
                  type="text"
                  defaultValue={prenom}
                  {...register("prenom", { required: true,
                    minLength: 3,
                    maxLength: 20, })}
                />
                {errors.prenom && <span>Ce champ est requis</span>}
                <br />
                <label htmlFor="email">Email:</label>
                <input
                className="ml-2"
                  type="email"
                  defaultValue={email}
                  {...register("email", { required: true,
                    minLength: 3,
                      maxLength: 30,
                      pattern: /.*@.*/ })}
                />
                {errors.email && <span className="block text-sm font-medium text-red-700">
                    Ton mail doit inclure @ et faire entre 3 et 20 caractères
                  </span>}
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
          <br/>
          <div>
          
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>{order.reference} - {order.date} - {order.prix}€</li>
          ))}
        </ul>
      ) : (
        <p>Aucune commande trouvée.</p>
      )}
          </div>
          <br/>
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
