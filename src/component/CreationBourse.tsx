'use client'

import { getAllDomaines } from '@/app/API/Domaine'
import { getAllNiveau } from '@/app/API/NiveauEtude'

import { TypeBourse } from '@/app/Type/typeBourse'
import { NiveauEtude } from '@/app/Type/typeNiveau'
import { DomaineBourse } from '@/app/Type/typeUser'
import { Universite } from '@/app/Type/universite'
import { Bourse } from '@/app/Type/typeBourse'
import {CreationBourse}  from '@/app/API/CreationBourse'
import React, { useState, useEffect } from 'react'

export default function ModalEtapes() {
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(1)
  const [domaines, setDomaines] = useState<DomaineBourse[]>([])
  const [niveauEtude, setNiveauEtude] = useState<NiveauEtude[]>([])

  const [typesBourse, setTypesBourse] = useState<TypeBourse[]>([])
  const [universitePartenaire, setUniversitePartenaire] = useState<Universite[]>([])


  const [formData, setFormData] = useState<Bourse>(
    {
    nomBourse: '',
    montant: '',
    pays: '',
    type: '',
    dateOuverture: '',
    dateCloture: '',
    niveau: '',
    domaine: '',
    conditionAge: '',
    conditionNationalite: '',
    document: '',
    remarque: '',
    universitePartenaire:'',
    NombreDePlace:''
  })

  const valeursTypesBourse = [
  { id: '1', libelle: 'Bourse complète' ,codeLibelle:"complet" },
  { id: '2', libelle: 'Bourse partielle', codeLibelle:"par" },
  { id: '3', libelle: 'Bourse de mobilité', codeLibelle:"mobil" },
]

const valeursUniversites = [
  { id: 'u1', libelle: 'Université de Douala' ,codeLibelle:"Univer01"},
  { id: 'u2', libelle: 'Université de Yaoundé I' ,codeLibelle:"Univer02" },
  { id: 'u3', libelle: 'Université de Garoua' ,codeLibelle:"Univer03"},
]

  const supform = () => {
  setFormData({
    nomBourse: '',
    montant: '',
    pays: '',
    type: '',
    dateOuverture: '',
    dateCloture: '',
    niveau: '',
    domaine: '',
    conditionAge: '',
    conditionNationalite: '',
    document: '',
    remarque: '',
    universitePartenaire: '',
    NombreDePlace: ''
  });
}

 useEffect(() => {
  const chargerDomaines = async () => {
    try {
      const domainesData = await getAllDomaines()
      const NiveauEtudes = await getAllNiveau()



         // valeurs par défaut locales
      setTypesBourse(valeursTypesBourse)
      setUniversitePartenaire(valeursUniversites)
      setDomaines(domainesData)
      setNiveauEtude(NiveauEtudes)
    } catch (error) {
      console.error('Erreur lors du chargement des domaines', error)
    }
  }

  chargerDomaines()
}, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

const handleSubmit = async () => {
  try {
    if (formData.nomBourse && formData.niveau) {
      console.log('Données à envoyer:', formData)
      
      const response = await CreationBourse(formData) // ✅ appel asynchrone

      if (!response?.ok) {
        const errorData = await response?.json()
        throw new Error(errorData.message || 'Erreur lors de la création.')
      }

      alert('Création réussie ! 🎉')
      supform()           // ✅ Réinitialise le formulaire
      setShowModal(false) // ✅ Ferme le modal
      setStep(1)          // ✅ Revient à l'étape 1
    } else {
      alert("Veuillez remplir les champs requis.")
    }
  } catch (error: any) {
    console.error('Erreur lors de la soumission :', error)
    alert(error.message || 'Erreur inconnue.')
  }
}

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Créer une bourse
      </button>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Création de Bourse - Étape {step}/3</h5>
                <button className="btn-close" onClick={() => setShowModal(false)} />
              </div>

              <div className="modal-body">
                {step === 1 && (
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input name="nomBourse" onChange={handleChange} value={formData.nomBourse} className="form-control" placeholder="Nom de la bourse" />
                    </div>
                    <div className="col-md-6">
                      <input name="montant" onChange={handleChange} value={formData.montant} className="form-control" placeholder="Montant" />
                    </div>
                    <div className="col-md-6">
                      <input name="pays" onChange={handleChange} value={formData.pays} className="form-control" placeholder="Pays" />
                    </div>
                    <div className="col-md-6">
                     <select
                        name="type"
                        value={formData.type}
                        onChange={handleSelectChange}
                        className="form-select"
                      >
                        <option value="">-- Type de bourse s--</option>
                        {typesBourse.map((t) => (
                          <option key={t.id} value={t.libelle}>
                            {t.libelle}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="date" name="dateOuverture" onChange={handleChange} value={formData.dateOuverture} className="form-control" placeholder="Date d'ouverture" />
                    </div>
                    <div className="col-md-6">
                      <input type="date" name="dateCloture" onChange={handleChange} value={formData.dateCloture} className="form-control" placeholder="Date de clôture" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="row g-3">
                    <div className="col-md-6">
                     <select
                        name="niveau"
                        id="niveau"
                        value={formData.niveau}
                        onChange={handleSelectChange}
                        className="form-control"
                      >
                        <option value="">-- Sélectionner un niveau d'études --</option>
                        {niveauEtude.map((niveau) => (
                          <option key={niveau.id} value={niveau.libelle}>
                            {niveau.libelle}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                           <select
                            name="domaine"   
                            id='domaine'                  // 🔑 doit correspondre à la clé dans formData
                            value={formData.domaine}          // ✅ garde la valeur sélectionnée
                            onChange={handleSelectChange}
                            className="form-control"
                          >
                            <option value="">-- Sélectionner un domaine --</option>
                            {domaines.map((domaine) => (
                              <option key={domaine.id} value={domaine.id}>
                                {domaine.libelle}
                              </option>
                            ))}
                          </select>

                    </div>
                    <div className="col-md-6">
                      <input name="conditionAge" onChange={handleChange} value={formData.conditionAge} className="form-control" placeholder="Condition d'âge" />
                    </div>
                     <div className="col-md-6">
                      <input name="NombreDePlace" onChange={handleChange} value={formData.NombreDePlace} className="form-control" placeholder="NombreDePlace" />
                    </div>
                    <div className="col-md-6">
                      <input name="conditionNationalite" onChange={handleChange} value={formData.conditionNationalite} className="form-control" placeholder="Nationalité éligible" />
                    </div>
                     <div className="col-md-6">
                     <select
                        name="universitePartenaire"
                        value={formData.universitePartenaire}
                        onChange={handleSelectChange}
                        className="form-select"
                      >
                        <option value="">-- Université partenaire --</option>
                        {universitePartenaire.map((u) => (
                          <option key={u.id} value={u.libelle}>
                            {u.libelle}
                          </option>
                        ))}
                      </select>

                    </div>
                    <div className="col-md-12">
                      <textarea name="remarque" onChange={handleChange} value={formData.remarque} className="form-control" placeholder="Remarques supplémentaires" />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="row g-3">
                    <div className="col-md-12">
                      <textarea name="document" onChange={handleChange} value={formData.document} className="form-control" placeholder="Pièces justificatives à fournir" />
                    </div>
                    <div className="col-md-12">
                      <textarea name="remarque" onChange={handleChange} value={formData.remarque} className="form-control" placeholder="Remarques supplémentaires (facultatif)" />
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                {step > 1 && (
                  <button className="btn btn-secondary" onClick={handleBack}>
                    Précédent
                  </button>
                )}
                {step < 3 ? (
                  <button className="btn btn-primary" onClick={handleNext}>
                    Suivant
                  </button>
                ) : (
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Valider la bourse
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
