import React from 'react'

const page = () => {
        const listePays = {
            pays:['john Doe',
                    'Ervis ', 
                    'Kuate',
                    'Rosine',
                    ],
                    }

        
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
  return (
    <div>

        {/** a propos de la structure */}
        <section className="py-5 bg-light text-center">
            <h2 className="mb-4 fw-bold">Univer<span className="mb-4 fw-bold text-primary">.City</span></h2>
            <p className="lead mx-auto" >
                Notre objectif principale est d'accompagner les jeunes , les nouveau diplomer qui revent
                de poursuivre leurs etudes dans des universités prestigieuses du monde entier a beneficier des bourses
                d'etude entierement financee ou partielement selon le profil d'un candidat. dans un premier temps en suite une fois l'etudiant 
                selection nous lui proposons un accompagnement jusqu'a l'obtention de son visa. et pour termine nous mettons au services de nos collaborateurs,
                des accompagnement a l'integration dans leur nouveau pays et cela pendant le cycle de leurs formation, facilitant les echange familiaux, etc .
                </p>
        </section>
        {/* À propos de l'equipe */}
        <section className="py-5 bg-light text-center">
        
                <h2 className="mb-4 fw-bold text-primary">Une Équipe</h2>
                <p className="lead mx-auto" style={{ maxWidth: '700px', fontStyle: 'italic', color: '#555' }}>
                Une équipe fiable et réactive, experte en accompagnement international.  
                À l’écoute de chaque étudiant, nous assurons un suivi personnalisé,  
                simplifions les démarches et maximisons vos chances de réussite.  
                Avec intégrité et professionnalisme, nous transformons vos ambitions en réalité.
                </p>
         
            </section>
        {/* Galerie Étudiants */}
        {/* Universités partenaires */}
            <section className="py-5 bg-light text-dark" id="temoignages">
            <div className="container">
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

            
            <footer className="bg-dark text-white text-center py-3 mt-4">
                    <div className="container">
                    &copy; {new Date().getFullYear()} BourseConnect. Tous droits réservés.
                    </div>
                </footer>
            </div>


  )
}

export default page
