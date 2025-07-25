
import { Connexion } from '@/app/Type/typeUser';

  const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function ConnexionUser(formData:Connexion ) {

    console.log('formData kjn', JSON.stringify(formData.email))
 if(!formData.email || !formData.password) return 
    try {
        const response = await fetch(`${API_URL}/api/auth`,  {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });
            console.log('response', response)
            const data = await response.json();
            // verifier si l'utilisateur existe
            if (!response.ok) {
                // Gestion des erreurs
                throw new Error("Une erreur est survenue lors de la selection du user.");
            }

            if (typeof window !== "undefined") {
                  localStorage.setItem("token", data.token); // JWT envoyé par le backend
             }
            
           
                        // En cas de succès
            console.log("Token reçu :");
            console.log("Utilisateur connecté :");

            const user ={
                "data": data.user,
                "response": response,
                "token":data.token
            }
            return user
        
    } catch (error) {
        console.error("Erreur lors de la verification de l'utilisateur ",error);
    }
    

}