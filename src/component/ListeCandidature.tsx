'use client';

import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

interface Candidature {
  id: string;
  nombourse: string;
  updatedAt: string;
  statut: string;
  statutPaiement: string;
}

interface Props {
  candidatures: Candidature[];
  loading: boolean;
  onConsulter: (id: string) => void;
}

const ListeCandidature: React.FC<Props> = ({ candidatures, loading, onConsulter }) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (candidatures && candidatures.length > 0 && tableRef.current) {
      const $table = $(tableRef.current);

      // Détruire si déjà initialisé (évite les erreurs lors des rechargements)
      if ($.fn.dataTable.isDataTable(tableRef.current)) {
        $table.DataTable().destroy();
      }

      $table.DataTable(); // Initialisation de DataTables
    }
  }, [candidatures]); // Re-initialise à chaque mise à jour des données

  if (loading) return <p>Chargement des candidatures...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Mes candidatures</h2>

      {candidatures === undefined ? (
        <p>Chargement des candidatures...</p>
      ) : candidatures.length === 0 ? (
        <p>Aucune candidature trouvée pour le moment.</p>
      ) : (
        <table className="table caption-top" ref={tableRef}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom Bourse</th>
              <th>Date de fin</th>
              <th>Statut</th>
              <th>Paiement</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {candidatures.map((candidature, index) => (
              <tr key={candidature.id}>
                <td>{index + 1}</td>
                <td>{candidature.nombourse}</td>
                <td>{candidature.updatedAt}</td>
                <td>{candidature.statut}</td>
                <td>{candidature.statutPaiement}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => onConsulter(candidature.id)}
                  >
                    Consulter
                  </button>
                  <button className="btn btn-danger btn-sm">Annuler</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListeCandidature;
