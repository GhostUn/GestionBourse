'use client'
import React, { useEffect, useState } from 'react'
import { User } from '@/app/Type/typeUser';
import { ListeUser } from '@/app/API/User';
interface ListingButton {
  type: 'bourses' | 'admin' | 'candidatures'
}

interface LinkItem {
  label: string
  href?: string
  className?: string
}



const ListeAdmin = ({ type }: ListingButton) => {
  const [utilisateurs, setUtilisateurs] = useState<User[]>([])

  const bouserBouttonItems: LinkItem[] = [
    { label: 'Ajout', className: 'btn btn-primary' },
    { label: 'Supprimer', className: 'btn btn-danger' },
    { label: 'Consulter', className: 'btn btn-info' },
  ]

  const candidaturesItems: LinkItem[] = [
    { label: 'Consulter', className: 'btn btn-info' },
    { label: 'Supprimer', className: 'btn btn-danger' },
  ]

  const links = type === 'bourses' ? bouserBouttonItems : candidaturesItems

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const res = await ListeUser()
        const data = await res?.json()
        setUtilisateurs(data)
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs :', error)
      }
    }

    fetchUtilisateurs()
  }, [])
    const handlerConsulter = async (id?:string) => {
            if (id) {
                console.log('id', id)
            }
    }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse</th>
            <th>Téléphone</th>
            <th>Role</th>
            <th colSpan={links.length}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.telephone}</td>
              <td>{/*user.role*/}</td>
              {links.map((link, idx) => (
                <td key={idx}>
                  <button
                  id={user.id}
                  name={user.userName}
                    className={`nav-link ${link.className ?? ''}`}
                    onClick={() => {console.log(`${link.label} pour ${user.name}`)
                    handlerConsulter(user.id)
              }
                }
                  >
                    {link.label}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListeAdmin
