// components/bourses/FormulaireDomaine.tsx
'use client'

import { useState } from 'react'
import { DomaineBourse } from '@/app/Type/typeUser'
import { creationDomaine } from '@/app/API/Domaine'
export default function FormulaireDomaine() {

      const [formData, setFormData ] = useState<DomaineBourse>({
        libelle:"",
        codeDomaine:"" })
        
       const supform = () => {
        setFormData({
            libelle: "",
            codeDomaine: "" });
        };

        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement>
        )=>{
            const {name, value} = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            try {
                
                alert(formData.libelle)
                if (formData.libelle && formData.codeDomaine ) {
                    //console.log('data1', formData)
                    const Domaines = await creationDomaine(formData)
                    //console.log('Domaines', Domaines)
                    supform();
                    if (!Domaines?.ok) {
                    const errorData = await Domaines?.json();
                    throw new Error(errorData.message || "Échec de la connexion.");
                    }
        
                    
            // Stocker le token dans localStorage
            //localStorage.setItem("token", response.data.token);
        
            alert("creation réussie !");
                }
                return
            } catch (error) {
                console.log('erreur lors du traitement du formulaire', error)
            }
        }

  return (
    <form onSubmit={handleSubmit}>

        <div className="container m-4">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="nom" className="form-label">Nom du domaine</label>
                    <input
                    type="text"
                    name='libelle'
                    className="form-control"
                    id="libelle"
                    value={formData.libelle}
                    onChange={handleChange}
                    />
                </div>
             
                   <div className="col-md-6">
                    <label htmlFor="code" className="form-label">Code Domaine</label>
                    <input
                    type="text"
                    name='codeDomaine'
                    className="form-control"
                    id="codedomaine"
                    value={formData.codeDomaine}
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row m-3">
                <div className="col-md-4">

                </div>
                <div className="col-md-3 center">
                     <button className="btn btn-primary center" type="submit" >Enregistrer</button>

                </div>
            </div>
        </div>
      
    </form>
  )
}
