// components/bourses/FormulaireDomaine.tsx
'use client'

import { useState } from 'react'
import { NiveauEtude } from '@/app/Type/typeNiveau'
import { CreateNiveau } from '@/app/API/NiveauEtude'
export default function FormulaireNiveauEtude() {

      const [formData, setFormData ] = useState<NiveauEtude>({
        libelle:"",
        codeNiveau:"" })
        
       const supform = () => {
        setFormData({
            libelle: "",
            codeNiveau: "" });
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
                if (formData.libelle && formData.codeNiveau ) {
                   // console.log('data1', formData)
                    const niveauEtudes = await CreateNiveau(formData)
                  //  console.log('niveau etude', niveauEtudes)
                    supform();
                    if (!niveauEtudes?.ok) {
                    const errorData = await niveauEtudes?.json();
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
                    <label htmlFor="nom" className="form-label">Libelle du Niveau</label>
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
                    <label htmlFor="code" className="form-label">Code Niveau </label>
                    <input
                    type="text"
                    name='codeNiveau'
                    className="form-control"
                    id="codeNiveau"
                    value={formData.codeNiveau}
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
