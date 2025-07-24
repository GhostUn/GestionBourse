'use client'

import React, { useEffect, useState } from 'react'
import ListeCandidature from '@/component/ListeCandidature'
import ModalCandidature from '@/component/DetailsCandidature'
import { useUser } from '@/app/context/useContext'
import { ListeCandidaturesUser } from '@/app/API/Candidature'
import dynamic from 'next/dynamic'
const Page = () => {
  const { user } = useUser()
  const [candidatures, setCandidatures] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<any | null>(null)
  const [showModal, setShowModal] = useState(false)
  const ListeCandidature = dynamic(() => import('@/component/ListeCandidature'), {
  ssr: false,
})

const ModalCandidature = dynamic(() => import('@/component/DetailsCandidature'), {
  ssr: false,
})
  useEffect(() => {
    if (!user || !user.email) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        const res = await ListeCandidaturesUser(user.email)
        if (Array.isArray(res)) {
          setCandidatures(res)
        }
      } catch (error) {
        console.error('Erreur chargement:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user?.email])

  const handleConsulter = (id: string) => {
    const candidature = candidatures.find((c) => c.id === id)
    if (candidature) {
      setSelected(candidature)
      setShowModal(true)
    }
  }

  return (
    <div className="container mt-4">
      <ListeCandidature
        candidatures={candidatures}
        loading={loading}
        onConsulter={handleConsulter}
      />
      <ModalCandidature
        show={showModal}
        onClose={() => setShowModal(false)}
        candidature={selected}
      />
    </div>
  )
}

export default Page
