'use client'

import React from 'react'

//import { User } from '@/app/Type/typeUser'
export type User = {
  id: string;
  email: string;
  nom?: string;
  telephone?: string;
  pays?: string;
  token?: string;
  prenom: string
  userName?: string
  password?: string,
  name?:string
}
interface UserProfileProps {
  user: User
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          {/* Left column: avatar + social */}
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={ 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: '150px' }}
                />
                <h5 className="my-3">{user.name}</h5>
                <p className="text-muted mb-1">{user.email || 'Utilisateur'}</p>
                <p className="text-muted mb-4">{user.prenom || 'Localisation non définie'}</p>
                <div className="d-flex justify-content-center mb-2">
                
                  <button type="button" className="btn btn-outline-primary">Modifier</button>
                </div>
              </div>
            </div>

            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  { /*user.website && (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <a href={user.website} target="_blank" rel="noopener noreferrer" className="mb-0">{user.website}</a>
                    </li>
                  )}
                  {user.github && (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg text-body"></i>
                      <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer" className="mb-0">{user.github}</a>
                    </li>
                  )}
                  {user.twitter && (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                      <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noopener noreferrer" className="mb-0">@{user.twitter}</a>
                    </li>
                  )}
                  {user.instagram && (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                      <a href={`https://instagram.com/${user.instagram}`} target="_blank" rel="noopener noreferrer" className="mb-0">{user.instagram}</a>
                    </li>
                  )}
                  {user.facebook && (
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                      <a href={`https://facebook.com/${user.facebook}`} target="_blank" rel="noopener noreferrer" className="mb-0">{user.facebook}</a>
                    </li>
                  )*/}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: details */}
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                {[
                  ['Full Name', user.name],
                  ['Email', user.email],
                  ['Phone', user.telephone],
                
                  ['Address', user.userName],
                  ['Pays', user.pays],

                ].map(([label, value]) => (
                  <React.Fragment key={label}>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">{label}</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{value || '-'}</p>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Exemple de projets / stats (à adapter ou supprimer) */}
     
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
