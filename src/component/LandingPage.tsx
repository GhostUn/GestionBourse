'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Temoignages from './Temoignages';

export const LandingPage = () => {

    const listePays = {
            pays:['France',
                    'États-Unis', 
                    'Chine',
                    'Russie',
                    'Canada',
                    'Belgique',
                    'Italie',
                'Suisse'],
                    
            decription:[
                "Des universités prestigieuses offrant des opportunités pour les étudiants africains.",
                "Des universités prestigieuses d'Amerique offrant des opportunités pour les étudiants africains."
            ]
    }
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <div>
      {/* Hero Section */}
     <header className="header-bg text-white text-center py-5">
        <div className="container position-relative z-2">
            <h1 className="display-4 fw-bold">Trouvez votre Bourse d'Étude Internationale</h1>
            <p className="lead mt-3">
            Nous connectons les étudiants d'Afrique avec les meilleures universités en Europe, Amérique, Chine et Russie.
            </p>
            <a href="#about" className="btn btn-primary mt-4">En savoir plus</a>
        </div>
    </header>


    {/** quelle que bourse  */}
    
      {/* Universités partenaires */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Universités Partenaires</h2>
          <div className="row text-center">
            {listePays.pays.map((pays, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{pays}</h5>
                    <p className="card-text">Des universités prestigieuses offrant des opportunités pour les étudiants africains.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* À propos */}
   <section className="py-5 bg-light text-center">
        <div className="container">
            <h2 className="mb-4 fw-bold text-primary">Notre Équipe</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px', fontStyle: 'italic', color: '#555' }}>
            Une équipe fiable et réactive, experte en accompagnement international.  
            À l’écoute de chaque étudiant, nous assurons un suivi personnalisé,  
            simplifions les démarches et maximisons vos chances de réussite.  
            Avec intégrité et professionnalisme, nous transformons vos ambitions en réalité.
            </p>
        </div>
        </section>
      {/* Galerie Étudiants */}
   <Temoignages />


      {/* Pourquoi nous choisir */}
      <section className="py-5 bg-light text-center mb-2" >
        <div className="container">
          <h2 className="text-center mb-5">Pourquoi nous choisir ?</h2>
          <div className="row">
            {[
              'Accompagnement personnalisé',
              'Partenariats avec +100 universités',
              'Taux de réussite de 98%',
              'Support en visa et logement'
            ].map((text, i) => (
              <div className="col-md-3 text-center text-black" key={i}>
                <div className="p-4 border rounded shadow-sm h-100">
                  <h4>✔</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2>Prêt à postuler ?</h2>
          <p className="mb-4">Inscrivez-vous dès aujourd’hui pour commencer votre parcours vers l’international.</p>
          <a href="/inscription" className="btn btn-light btn-lg">Commencer</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container">
          &copy; {new Date().getFullYear()} BourseConnect. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};
