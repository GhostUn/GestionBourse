'use client'

import Link from "next/link"
import { Bourse } from "@/app/Type/typeBourse"

export default function BourseCard({ bourse }: { bourse: Bourse }) {
  return (
    <div className="card h-100 shadow-sm border">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h4 className="card-title h6 fw-bold text-truncate">{bourse.nomBourse}</h4>
          <span className="badge bg-primary">Internationale</span>
        </div>

        <ul className="list-unstyled small mb-3">
          <li className="mb-1"><i className="bi bi-globe"></i> {bourse.pays}</li>
          <li className="mb-1"><i className="bi bi-currency-euro"></i> {bourse.montant} de couverture</li>
          <li className="mb-1"><i className="bi bi-calendar-event"></i> {bourse.dateCloture}</li>
          <li><i className="bi bi-mortarboard"></i> {bourse.niveau}</li>
        </ul>

        <p className="card-text text-muted mb-4 flex-grow-1" style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden'
        }}>
          {bourse.remarque}
        </p>

        <Link href={`/bourses/${bourse.id}`} className="btn btn-dark mt-auto">
          Voir plus
        </Link>
        
      </div>
    </div>
  )
}