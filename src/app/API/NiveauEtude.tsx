import { NiveauEtude } from "../Type/typeNiveau";

export async function CreateNiveau(formData :NiveauEtude) {
    if(!formData.libelle) return
    console.log('fromData', formData)
    try {
        const response = await fetch('http://localhost:3003/api/NiveauEtude',  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        console.log('formData mes datas end front', response)
            return response
        
    } catch (error) {
        console.error("Erreur lors de la Creation du niveau ",error);
    }
    
}

// app/API/domaines.ts
export async function getAllNiveau() {
  try {
    const res = await fetch('http://localhost:3003/api/NiveauEtude');
    console.log('res ici', res)
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des Niveau d\'etude');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erreur API getAllNiveau:', error);
    throw error;
  }
}
