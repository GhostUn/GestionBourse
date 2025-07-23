'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { creationUser } from '@/app/API/User'
import { User } from '@/app/Type/typeUser'

const InscriptionForms = () => {
  const [formData, setFormData] = useState<User>({
    name: "",
    prenom: "",
    telephone: "",
    userName: "",
    password: "",
    email: ""
  })

  const supform = () => {
    setFormData({
      name: "",
      prenom: "",
      telephone: "",
      userName: "",
      password: "",
      email: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (formData.userName && formData.name) {
        const Etudiant = await creationUser(formData)
        //supform()
        if (!Etudiant?.ok) {
          const errorData = await Etudiant?.json()
          throw new Error(errorData.message || "Échec de l'inscription.")
        }
        alert("Création réussie !")
      }
    } catch (error) {
      console.log('Erreur lors de la création du compte', error)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '500px' }}>
        <h3 className="text-center mb-4">Créer un compte</h3>

        <form onSubmit={handleSubmit}>
          {/* Nom */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Nom"
              required
            />
          </div>

          {/* Prénom */}
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="form-control"
              placeholder="Prénom"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="email@exemple.com"
              required
            />
          </div>

          {/* Téléphone */}
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">Téléphone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="form-control"
              placeholder="+221 77 000 0000"
            />
          </div>

          {/* Nom d'utilisateur */}
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="form-control"
              placeholder="Pseudo"
              required
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            S'inscrire
          </button>
        </form>

        {/* Boutons sociaux */}
         
        <div className="mt-4">
          <p className="text-center">Ou Connectez-vous avec</p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="/connexion">
                   <button className="btn btn-outline-danger d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faGoogle} />
              Google
            </button>
            </a>
         
            <button className="btn btn-outline-primary d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InscriptionForms
