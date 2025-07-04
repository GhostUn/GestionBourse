// components/bourses/FormulaireDomaine.tsx
'use client'

import { useState } from 'react'
import { TypeBourse } from '@/app/Type/typeBourse'
import { creationTypeBourse } from '@/app/API/TypeBourse'


export default function FormulaireTypeBourse() {

      const [formData, setFormData ] = useState<TypeBourse>({
        libelle:"",
        codeLibelle:"" })
        
       const supform = () => {
        setFormData({
            libelle: "",
            codeLibelle: "" });
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
                if (formData.libelle && formData.codeLibelle ) {
                    console.log('data1', formData)
                    const BourseType = await creationTypeBourse(formData)
                    console.log('Etudiant', BourseType)
                    supform();
                    if (!BourseType?.ok) {
                    const errorData = await BourseType?.json();
                    throw new Error(errorData.message || "creation.");
                    }
        
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
                    <label htmlFor="nom" className="form-label">Libelle</label>
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
                    <label htmlFor="code" className="form-label">code Libelle</label>
                    <input
                    type="text"
                    name='codeLibelle'
                    className="form-control"
                    id="codeLibelle"
                    value={formData.codeLibelle}
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
