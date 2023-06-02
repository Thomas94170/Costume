import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length < 5 || !email.includes("@")) {
        console.error("Adresse e-mail invalide.");
        // Afficher un message d'erreur ou effectuer une action appropriée
        return;
      }

    try {
      const response = await axios.post('http://localhost:5400/mailchimp/api/subscribe', {email});
        console.log(email)
      console.log('Abonné ajouté avec succès :', response.data);

      // Réinitialisez les champs du formulaire après la soumission réussie
      setEmail('');
     
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'abonné :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
        <p>Inscrivez vous afin de suivre nos actualités et recevoir des bons plans</p>
  <input
    type="email"
    placeholder="Adresse e-mail"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border rounded w-full py-2 px-3 text-gray-700 mb-4 focus:outline-none focus:shadow-outline"
  />
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    S'abonner
  </button>
</form>
  );
};

export default NewsletterForm;
