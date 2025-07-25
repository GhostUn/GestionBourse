import { Bourse } from "../Type/typeBourse";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function CreationBourse(formData :Bourse) {
    if(!formData.nomBourse) return
    console.log('fromData', formData)
    try {
        const response = await fetch(`${API_URL}/api/Bourses`,  {
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

/*export async function getBourses(filtres: any) {
  const query = new URLSearchParams(filtres).toString()
  console.log('ici', )
  const res = await fetch(`/api/bourses?${query}`)
  const data = await res.json()
  return data.bourses
}*/
export async function getAllBourses() {
  const response = await fetch(`${API_URL}/api/Bourses`,  {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
  
  const data = await response.json()
  return data
}
/*export async function getBourseById(id: number): Promise<Bourse>{
 const response = await fetch(`http://localhost:3003/Bourses/${id}`,{
   method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

  const data = await response.json()
  return data
}*/
export const getBourseById = async (id: string) => {
  const res = await fetch(`${API_URL}/api/bourses/${id}`); // 🟠 adapte l'URL
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return await res.json(); // ✅ retourne les données
};
export const bourseSearch1 = async (query: string) => {

  try {
    
    const res = await fetch(`${API_URL}/api/bourses/search?query=${query}`);

    return await res.json();
  } catch (error) {
    console.log('error', error)
    throw new Error('Erreur lors de la récupération des données');
  }
};
export const bourseSearch = async (filters: {
            search: string;
            type?: string;
            pays?: string;
            niveau?: string;
            taux?: string;
            duree?: string;
  }): Promise<Bourse[]> => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.append(key, value);
  });

  const res = await fetch(`${API_URL}/api/bourses/search?${params.toString()}`);
  return await res.json();
};