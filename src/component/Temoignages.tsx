import React from 'react';

const temoignages = [
  {
    nom: 'Fatou Diop',
    pays: 'Sénégal',
    texte: "Grâce à cette plateforme, j'ai obtenu une bourse en France pour mon Master. Un accompagnement sérieux et professionnel !",
    image: '/images/temoin1.png',
  },
  {
    nom: 'Jean Kouam',
    pays: 'Cameroun',
    texte: "Je suis maintenant étudiant en ingénierie au Canada. Merci pour l’accompagnement et les conseils personnalisés.",
    image: '/images/temoin2.jpg',
  },
  {
    nom: 'Awa Traoré',
    pays: 'Mali',
    texte: "Une équipe à l’écoute ! J’ai pu intégrer une université en Allemagne avec une bourse complète.",
    image: '/images/temoin3.jpg',
  },
];

export default function Temoignages() {
  return (
    <section className="py-5 bg-light text-dark" id="temoignages">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Ils nous ont fait confiance</h2>
        <div className="row">
          {temoignages.map((temoin, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={temoin.image}
                  alt={temoin.nom}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{temoin.nom}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{temoin.pays}</h6>
                  <p className="card-text">"{temoin.texte}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
