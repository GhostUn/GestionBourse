import { Candidature } from "../Type/candidature";

export async function CreationCandidature(formData: Candidature) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!formData.nomEt) return;

  try {
    // Construction du FormData
    const data = new FormData();
    data.append("nomEt", formData.nomEt);
    data.append("nombourse", formData.nombourse);
    data.append("email", formData.email);
    data.append("pays", formData.pays);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("amount", formData.amount);
    data.append("modePaiement", formData.modePaiement);

    if (formData.cv) data.append("cv", formData.cv);
    if (formData.DiplomeRequis) data.append("DiplomeRequis", formData.DiplomeRequis);
    if (formData.denierDiplome) data.append("denierDiplome", formData.denierDiplome);
    if (formData.lettreRecommandation) data.append("lettreRecommandation", formData.lettreRecommandation);
    console.log('data soumis', formData.denierDiplome)
    const response = await fetch(`${API_URL}/api/Candidatures`, {
      method: "POST",
      body: data, // Pas besoin de headers
    });
    // Vérifiez si la réponse est OK (status 200-299)
 

    // Récupération des données JSON
    const responseData = await response.json();
    console.log('Réponse de l\'API :', responseData);
       if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

 // Redirection vers le formulaire de paiement
    if (responseData.payment_url) {
      window.location.href = responseData.payment_url;
    } else {
      console.error('Erreur : payment_url non disponible.');
    }

    return responseData;
  } catch (error) {
    console.error("Erreur lors de la création de la candidature", error);
  }
}

export async function ListeCandidaturesUser(email: string) {
  try {
    console.log('encodeURIComponent(email)', encodeURIComponent(email))
    const response = await fetch(`http://localhost:3003/api/candidatures/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log('Réponse du backend (candidatures):', data);
      // Garde cette vérification
    if (!Array.isArray(data)) {
      console.warn("La réponse n'est pas un tableau !");
      return [];
    }
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des candidatures de l'utilisateur :", error);
    return null;
  }
}
