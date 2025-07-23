'use client'

import React, { useEffect, useState } from 'react'
import BourseCard from './BourseCard'
import { getAllBourses } from '@/app/API/CreationBourse'
import { Bourse } from '@/app/Type/typeBourse'

type ListeBoursesProps = {
  filtres: Record<string, any>
}

export default function ListeBourses({ filtres }: ListeBoursesProps) {
  const [bourses, setBourses] = useState<Bourse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllBourses(filtres)
        if (Array.isArray(result)) {
          setBourses(result)
        } else {
          console.error('Le format des données reçues n’est pas un tableau')
        }
      } catch (error) {
        console.error('Erreur lors du chargement des bourses:', error)
      }
    }

    fetchData()
  }, [filtres])

  return (
    <div className="row mt-4">
      {bourses.map((bourse, index) => (
        <div key={index} className="col-md-4 mb-4">
          <BourseCard bourse={bourse} />
        </div>
      ))}
    </div>
  )
}
