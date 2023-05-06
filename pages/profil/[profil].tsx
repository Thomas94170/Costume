import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "@/components/loading";

export default function Profil(){
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
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

  if (!userInfo) {
    return <Loading/>;
  }
  const { id, prenom, nom, email } = userInfo;
  
  return (
    <>
      <h1>Bienvenue {prenom} !</h1>
    </>
  );
}