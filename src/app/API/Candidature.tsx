import { Candidature } from "../Type/candidature";

export async function CreationCandidature(formData: Candidature) {
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
    const response = await fetch("http://localhost:3003/api/Candidatures", {
      method: "POST",
      body: data, // Pas besoin de headers
    });

    return response;
  } catch (error) {
    console.error("Erreur lors de la création de la candidature", error);
  }
}
