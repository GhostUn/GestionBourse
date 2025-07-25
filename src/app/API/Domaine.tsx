import { DomaineBourse } from "../Type/typeUser";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function creationDomaine(formData :DomaineBourse) {
    if(!formData.libelle) return
    console.log('fromData', formData)
    try {
        const response = await fetch(`${API_URL}/api/DomaineBourse`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        console.log('formData mes datas end front', response)
            return response
        
    } catch (error) {
        console.error("Erreur lors de la verification de l'utilisateur ",error);
    }
    
}

// app/API/domaines.ts
export async function getAllDomaines() {
  try {
    const res = await fetch(`${API_URL}/api/DomaineBourse`);
    console.log('res ici', res)
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des domaines');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Erreur API getAllDomaines:', error);
    throw error;
  }
}
