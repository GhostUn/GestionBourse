import { TypeBourse } from "../Type/typeBourse";

export async function creationTypeBourse(formData :TypeBourse) {
    if(!formData.libelle) return
    console.log('fromData', formData)
    try {
        const response = await fetch('http://localhost:3003/BourseType',  {
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