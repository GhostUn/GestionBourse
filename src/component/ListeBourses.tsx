'use client'

import React, { useEffect, useState } from 'react'
import BourseCard from './BourseCard'
import { getAllBourses } from '@/app/API/CreationBourse'
import { Bourse } from '@/app/Type/typeBourse'

export default function ListeBourses({ filtres }: { filtres: any }) {
  const [bourses, setBourses] = useState<Bourse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllBourses(filtres)
        setBourses(result)
      } catch (error) {
        console.error('Erreur lors du chargement des bourses:', error)
      }
    }

    fetchData()
  }, [filtres])

  return (
    <div className="row mt-4">
      {bourses.map((bourse, index) => (
        <div key={index} className="col-md-3 mb-4">
          <BourseCard bourse={bourse} />
        </div>
      ))}
    </div>
  )
}