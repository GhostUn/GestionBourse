import { Bourse } from "../Type/typeBourse";

export async function CreationBourse(formData :Bourse) {
    if(!formData.nomBourse) return
    console.log('fromData', formData)
    try {
        const response = await fetch('http://localhost:3003/api/Bourses',  {
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
    const res = await fetch('http://localhost:3003/api/DomaineBourse');
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

export async function getBourses(filtres: any) {
  const query = new URLSearchParams(filtres).toString()
  console.log('ici', )
  const res = await fetch(`/api/bourses?${query}`)
  const data = await res.json()
  return data.bourses
}
export async function getAllBourses(filtres: any) {
  const response = await fetch('http://localhost:3003/api/Bourses',  {
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
  const res = await fetch(`http://localhost:3003/api/bourses/${id}`); // 🟠 adapte l'URL
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return await res.json(); // ✅ retourne les données
};
export const bourseSearch = async (query: string) => {

  try {
    
    const res = await fetch(`http://localhost:3003/api/bourses/search?query=${query}`);

    return await res.json();
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données');
  }
};
