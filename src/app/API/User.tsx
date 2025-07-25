
import {User} from "../Type/typeUser"

  const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function creationUser(formData :User) {
    if(!formData.userName) return
    
    try {
        const response = await fetch(`${API_URL}/users`,  {
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

export async function ListeUser() {
    try {
        const response = await fetch('http://localhost:3003/users/',  {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            });
console.log('formData mes datas end front liste', response)

            return response
        
    } catch (error) {
        console.error("Erreur lors de la verification de l'utilisateur ",error);
    }
    
}