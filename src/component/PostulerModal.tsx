// components/PostulerModal.tsx
'use client';
import { CreationCandidature } from '@/app/API/Candidature';
import { Candidature } from '@/app/Type/candidature';
import React, { useEffect, useState } from 'react';
import { useUser } from "@/app/context/useContext";
interface PostulerModalProps {
  bourseId: any; // ID de la bourse
  onClose: () => void; // Fonction pour fermer le modal
}



export default function PostulerModal({ bourseId, onClose }: PostulerModalProps) {
  // État pour gérer les étapes
      const { user } = useUser();
      const [step, setStep] = useState(1)
      const [showModal, setShowModal] = useState(false)
      console.log('user', user)
      const modePaiements = ['Mobile money', 'Wave' , 'Virement']
  // État pour stocker les données des différentes étapes
       const [formData, setFormData] = useState<Candidature>({
    nomEt: '',
    nombourse:'',
    email: '',
    //document: null as File | null,
    phoneNumber: '',
    amount: '',
    pays:'',
    modePaiement:'',
    denierDiplome: null as File | null,
    DiplomeRequis:null as File | null,
    cv:null as File | null,
    lettreRecommandation:null as File | null,

      });
        if (!user) {
    return <p>Veuillez vous connecter pour postuler</p>;
  }

  useEffect(() => {
  const userStored = localStorage.getItem('user')
  if (userStored) {
    const user = JSON.parse(userStored)
    setFormData(prev => ({
      ...prev,
      nomEt: user.name,
      email: user.email,
      pays: user.pays, // si tu l’as
        }))
    }
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({
            ...prev,
            [name]: file
            }));
        }
    };

  
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

  // Gestion de la soumission finale
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    // Vérification des champs requis
    if (!formData.nomEt || !formData.email || !formData.modePaiement) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    try {
      console.log('dernierDiplome', formData)
   
      // Requête POST vers l'API pour soumettre la candidature
      
       const candidature = await CreationCandidature(formData)
    
        
        if (!candidature?.ok) {
        alert("Erreur : " + candidature.message);
        return;
        }

          alert("Candidature enregistrée avec succès !");
          window.open(candidature.recuUrl, '_blank');
          onClose(); // Fermer le modal
    
      } catch (err: any) {
        alert("Erreur : " + err.message);
      }
  };

  return (
   
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Création de Bourse - Étape {step}/3</h5>
                <button className="btn-close" onClick={() => onClose()} />
              </div>

              <div className="modal-body">
                {step === 1 && (
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input name="nomEt" onChange={handleChange} value={formData.nomEt || user.nom} className="form-control"  placeholder="Etudaint" />
                    </div>
                    <div className="col-md-6">
                      <input name="email" onChange={handleChange} value={formData.email || user.email} className="form-control" placeholder="email" />
                    </div>
                    <div className="col-md-6">
                      <input name="pays"  onChange={handleChange} value={formData.pays} className="form-control" placeholder="Pays" />
                    </div>
                      <div className="col-md-6">
                      <input name="nombourse" onChange={handleChange} value={formData.nombourse} className="form-control" placeholder="Nom de la bourse" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="row g-3">
                    
                    <div className="col-md-6">
                        <label htmlFor=""> Cv</label>
                      {formData.cv && <small>Fichier sélectionné : {formData.cv.name}</small>}

                        <input name="cv" type='file' onChange={handleFileChange} className="form-control" placeholder="cv" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="">  Diplome Requis</label>
                      {formData.DiplomeRequis && <small>Fichier sélectionné : {formData.DiplomeRequis.name}</small>}

                      <input name="DiplomeRequis" type='file' onChange={handleFileChange}  className="form-control" placeholder="Diplome Requis" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor=""> Dernier Diplome</label>
                      {formData.denierDiplome && <small>Fichier sélectionné : {formData.denierDiplome.name}</small>}

                      <input name="denierDiplome" type='file' onChange={handleFileChange} className="form-control" placeholder="Dernier Diplome" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor=""> Lettre de recommandation</label>
                      <input name="lettreRecommandation" type='file' onChange={handleFileChange}  className="form-control" placeholder="lettre de Recommandation" />
                    {formData.lettreRecommandation && <small>Fichier sélectionné : {formData.lettreRecommandation.name}</small>}

                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="row g-3">
                    <div className="col-md-6">
                     <select
                        name="modePaiement"
                        id="modePaiement"
                        value={formData.modePaiement}
                        onChange={handleSelectChange}
                        className="form-control"
                      >
                        <option value="">-- Sélectionner un Moyens de Paiement --</option>
                        {modePaiements.map((niveau, idx) => (
                          <option key={idx} value={niveau}>
                            {niveau}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <input name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} className="form-control" placeholder="Telephone" />
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