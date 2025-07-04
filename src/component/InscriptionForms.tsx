'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { creationUser } from '@/app/API/User';
import { User } from '@/app/Type/typeUser';

const InscriptionForms = () => {



  const [formData, setFormData ] = useState<User>({
    name:"",
    prenom:"",
    telephone:"",
    userName:"",
    password:"",
    email:""
  })

  const supform = () => {
  setFormData({
    name: "",
    prenom: "",
    telephone: "",
    userName: "",
    password: "",
    email: ""
  });
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

 // Étape 3 : Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Afficher les données du formulaire dans la console (ou les envoyer à une API)
    try {

         if (formData.userName && formData.name ) {
             console.log('data1', formData)
            const Etudiant = await creationUser(formData)
            console.log('Etudiant', Etudiant)
            supform();
            if (!Etudiant?.ok) {
            const errorData = await Etudiant?.json();
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
    // Réinitialiser le formulaire si nécessaire
   
  };
  return (
   <div className="d-flex justify-content-center align-items-center vh-100">
        {/* Background Shapes */}
        <div className="position-absolute background-shapes">
            <div className="shape shape-first"></div>
            <div className="shape shape-last"></div>
        </div>

        {/* Login Form */}
        <form className="glassmorphism-form bg-transparent p-5 rounded" onSubmit={handleSubmit}>
            <h3 className="text-center text-white fw-bold mb-4">Cree un compte </h3>

            {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="name" className="form-label text-white fw-medium">
                Nom
            </label>
            <input
                type="text"
                id="name"
                name="name" // Must match the key in the state
                value={formData.name}
                onChange={handleChange} // Add the onChange handle
               
                className="form-control bg-transparent text-white border-0"
                placeholder="Name"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>
              {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="email" className="form-label text-white fw-medium">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email" // Must match the key in the state
                value={formData.email}
                onChange={handleChange} // Add the onChange handle
               
                className="form-control bg-transparent text-white border-0"
                placeholder="Email"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>

            {/* Password Field */}
            <div className="mb-4">
            <label htmlFor="prenom" className="form-label text-white fw-medium">
                Prenom
            </label>
            <input
                type="text"
                id="prenom"
                name='prenom'
                onChange={handleChange}
                value={formData.prenom}
                placeholder="Prenom"
                className="form-control bg-transparent text-white border-0"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>

            
            {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="telephone" className="form-label text-white fw-medium">
                Telephone
            </label>
            <input
                type="text"
                id="phone"
                name='telephone'
                onChange={handleChange}
                value={formData.telephone}
                className="form-control bg-transparent text-white border-0"
                placeholder="+1 452 8856 222"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>

            
            {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="username" className="form-label text-white fw-medium">
                Username
            </label>
            <input
                type="text"
                id="username"
                name='userName'
                onChange={handleChange}
                value={formData.userName}
                className="form-control bg-transparent text-white border-0"
                placeholder="Email or Phone"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>


            
            {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="password" className="form-label text-white fw-medium">
                Mots de passe
            </label>
            <input
                type="password"
                id="password"
                name='password'
                onChange={handleChange}
                value={formData.password}
                className="form-control bg-transparent text-white border-0"
                placeholder="Password"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>

            {/* Login Button */}
            <button
            type="submit"
            className="btn btn-light w-100 fw-bold"
            style={{ color: "#080710" }}
            >
            S'incrire
            </button>

            {/* Social Login Buttons */}
              <div className="d-flex justify-content-between mt-4 social-buttons gap-3 ">
            <div className="social-btn google d-flex align-items-center justify-content-center go">
                <FontAwesomeIcon icon={faGoogle} className="me-1 w-100" />
                Google
            </div>
            <div className="social-btn facebook d-flex align-items-center justify-content-center fb">
                <FontAwesomeIcon icon={faFacebook} className="me-2 w-100" />
                Facebook
          </div>
        </div>
        </form>
        </div>
  )
}

export default InscriptionForms
