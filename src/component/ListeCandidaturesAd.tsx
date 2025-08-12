'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ListeCandidatures } from '@/app/API/Candidature';
import { Candidature } from '@/app/Type/candidature';

interface ListingButton {
  type?: 'bourses' | 'admin' | 'candidatures'
}

interface LinkItem {
  label: string
  href?: string
  className?: string
}

const ListeCandidaturesAd = ({ type = "admin"}: ListingButton) => {
  const [utilisateurs, setUtilisateurs] = useState<Candidature[]>([])
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    // Importer jQuery et DataTables uniquement côté client
    (async () => {
      const $ = (await import('jquery')).default;
      await import('datatables.net-bs4');
      

      if (utilisateurs.length > 0 && tableRef.current) {
        const $table = $(tableRef.current);

        if ($.fn.dataTable.isDataTable(tableRef.current)) {
          $table.DataTable().destroy();
        }
        $table.DataTable();
      }
    })();
  }, [utilisateurs]);

  const bouserBouttonItems: LinkItem[] = [
    { label: 'Ajout', className: 'btn btn-primary' },
    { label: 'Supprimer', className: 'btn btn-danger' },
    { label: 'Consulter', className: 'btn btn-info' },
  ]

  const candidaturesItems: LinkItem[] = [
    { label: 'Valider', className: 'btn btn-info' },
    { label: 'Regeter', className: 'btn btn-danger' },
  ]

  const links = type === 'bourses' ? bouserBouttonItems : candidaturesItems

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const data = await ListeCandidatures();
        setUtilisateurs(data || []);
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      }
    }
    fetchUtilisateurs();
  }, []);

  const handlerConsulter = async (id?:string) => {
    if (id) {
      console.log('id', id)
    }
  }

  return (
    <div className='row'>
      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered" ref={tableRef}>
          <thead className="table-dark">
            <tr>
              <th>Nom Etudiant</th>
              <th>Nom Bouser</th>
              <th>Email</th>
              <th>telephone etudaint</th>
              <th>Pays </th>
              <th>Paiement </th>
              <th>Statut Traitement </th>
              <th colSpan={links.length}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs?.map((user, id) => (
              <tr key={id}>
                <td>{user.nomEt}</td>
                <td>{user.nombourse}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.pays}</td>
                <td>{user.statutPaiement}</td>
                <td>{user.statutTraitement}</td>
                {links.map((link, idx) => (
                  <td key={idx}>
                    <button
                      className={`btn btn-sm ${link.className ?? 'btn-outline-primary'}`}
                      onClick={() => handlerConsulter(user.email)}
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
    </div>
  )
}

export default ListeCandidaturesAd;
