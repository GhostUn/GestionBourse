'use client'
import React, { useState } from 'react'
import { Bourse } from '@/app/Type/typeBourse'
import PostulerModal from './PostulerModal';

interface Props {
  bourse: Bourse;
}

export default function BourseDetails({ bourse }: Props) {
  // 🔥 Supprimé useRouter
  // État pour contrôler l'ouverture/fermeture du modal
  const [showModal, setShowModal] = useState(false);

  const postulerBourse = async (bourseId?: any) => {
  try {

    
    const response = await fetch(`/api/postuler`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bourseId, etudiantId: '123' }), // ou récupéré depuis le contexte utilisateur
    });

    if (!response.ok) throw new Error("Échec de la candidature");

    alert("Votre candidature a été envoyée avec succès !");
  } catch (err: any) {
    alert("Erreur : " + err.message);
  }
};


  return (
    <div className="container mx-auto p-4">
      <button onClick={() => history.back()} className="mb-4 d-flex align-items-center gap-2 text-primary">
        <i className="fas fa-arrow-left"></i>
        Retour aux bourses
      </button>

      <div className="bg-primary text-white p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold">{bourse.nomBourse}</h1>
        <p className="text-sm">{bourse.pays}</p>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
        <div className="col">
          <div className="card bg-light text-dark p-3 rounded">
            <i className="fas fa-percentage me-2"></i>
            Couverture
            <h5 className="mt-2">{bourse.type}</h5>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light text-dark p-3 rounded">
            <i className="fas fa-clock me-2"></i>
            Nombre De Bourses
            <h5 className="mt-2">{bourse.NombreDePlace}</h5>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light text-dark p-3 rounded">
            <i className="fas fa-mortar-board me-2"></i>
            Niveaux
            <h5 className="mt-2">{bourse.niveau}</h5>
          </div>
        </div>
      </div>

      <div className="card bg-light p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Description de la bourse</h2>
        <p>{bourse.remarque}</p>
      </div>
      <div className="card bg-light p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Condition d'eligibilites:</h2>
        <p>{bourse.document}</p>
      </div>

          {/* Bouton Postuler */}
        <div className="text-center mt-4">
          <button
            className="btn btn-success"
            onClick={() => setShowModal(true)}
          >
            Postuler à cette bourse
          </button>
        </div>

      {/* Affichage du Modal */}
      {showModal && (
        <PostulerModal
          bourseId={bourse.id}
          onClose={() => setShowModal(false)}
        />
      )}
   
    </div>
  )
}
