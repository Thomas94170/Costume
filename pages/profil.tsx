import React from "react";
import { useRouter } from "next/router";

export default function Profil(){
    const router = useRouter();
  const { email } = router.query; // Récupérer l'ID de l'utilisateur dans l'URL
  // ...
  console.log(email)

  return (
    <div>
      <h1>Bienvenue {email}</h1>
      {/* ... */}
    </div>
  );
}