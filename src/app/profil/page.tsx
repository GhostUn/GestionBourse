'use client'
import React from 'react'
import DashboardLayout from '../dashboard/layout'
import UserProfile from '@/component/Profil'
import { useUser } from '../context/useContext'
import { User } from '../Type/typeUser'

const Page = () => {


  const { user } = useUser()

  return (
    <DashboardLayout>
      {user ? (
        <UserProfile user={user} />
      ) : (
        <p>Chargement du profil...</p> // ou redirection ou message de connexion requis
      )}
    </DashboardLayout>
  )
}

export default Page
