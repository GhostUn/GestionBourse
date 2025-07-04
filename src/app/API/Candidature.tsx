import { Candidature } from "../Type/candidature";

export async function CreationCandidature(formData :Candidature) {
    if(!formData.nomEt) return
    console.log('fromData', formData)
    try {
        const response = await fetch('http://localhost:3003/api/Candidature',  {
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