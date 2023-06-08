import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

export default function ProfileButton() {
  const router = useRouter();

  useEffect(() => {
    console.log("Le useEffect est exécuté.");

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken && decodedToken.email) {
          const email = decodedToken.email;
          console.log("Email récupéré :", email);
        }
      } catch (error) {
        console.error("Erreur lors du décodage du token :", error);
      }
    }
  }, []);

  const handleClick = () => {
    console.log("Bouton cliqué !");
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken && decodedToken.email) {
          const email = decodedToken.email;
          router.push(`/profil/${email}`);
        }
      } catch (error) {
        console.error("Erreur lors du décodage du token :", error);
      }
    }
  };

  return (
    <button onClick={handleClick}>Aller vers mon Profil</button>
  );
}
