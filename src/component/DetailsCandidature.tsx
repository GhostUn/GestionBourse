'use client'
import { Modal, Button } from 'react-bootstrap'

interface Candidature {
  id: string
  nomEt: string
  nombourse: string
  email: string
  phoneNumber: string
  pays: string
  modePaiement: string
  denierDiplome: string
  DiplomeRequis: string
  cv: string
  lettreRecommandation: string
  montant: string
  statutPaiement: string
  createdAt: string
  updatedAt: string
}

interface ModalProps {
  show: boolean
  onClose: () => void
  candidature: Candidature | null
}

const DetailsCandidature = ({ show, onClose, candidature }: ModalProps) => {
  if (!candidature) return null

  const contactViaEmail = () => {
    window.location.href = `mailto:support@tonsite.com?subject=Aide concernant ma candidature&body=Bonjour, j’ai besoin d’aide concernant ma candidature ID: ${candidature.id}`
  }

  const contactViaWhatsApp = () => {
    const message = encodeURIComponent(`Bonjour, j’ai besoin d’aide concernant ma candidature ID: ${candidature.id}`)
    window.open(`https://wa.me/2376XXXXXXXX?text=${message}`, '_blank')
  }

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Détails de la candidature</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            <div className="card p-4 shadow">
                <div className="row">
                {/* Colonne 1 */}
                <div className="col-md-4 mb-3">
                    <div><strong>Nom de l'étudiant :</strong><br />{candidature.nomEt}</div>
                    <div><strong>Email :</strong><br />{candidature.email}</div>
                    <div><strong>Pays :</strong><br />{candidature.pays}</div>
                    <div><strong>Diplôme requis :</strong><br />{candidature.DiplomeRequis}</div>
                    <div><strong>Montant :</strong><br />{candidature.montant} FCFA</div>
                </div>

                {/* Colonne 2 */}
                <div className="col-md-4 mb-3">
                    <div><strong>Nom de la bourse :</strong><br />{candidature.nombourse}</div>
                    <div><strong>Téléphone :</strong><br />{candidature.phoneNumber}</div>
                    <div><strong>Dernier diplôme :</strong><br />{candidature.denierDiplome}</div>
                    <div><strong>Statut Paiement :</strong><br />{candidature.statutPaiement}</div>
                    <div><strong>Date de création :</strong><br />{new Date(candidature.createdAt).toLocaleString()}</div>
                </div>

                {/* Colonne 3 */}
                <div className="col-md-4 mb-3">
                    <div><strong>CV :</strong><br />
                    <a href={candidature.cv} target="_blank" rel="noopener noreferrer">
                        <img src={candidature.cv} alt="CV" style={{ width: "100%", maxHeight: "150px", objectFit: "cover" }} />
                    </a>
                    </div>
                    <div className="mt-2"><strong>Lettre de recommandation :</strong><br />
                    <a href={candidature.lettreRecommandation} target="_blank" rel="noopener noreferrer">
                        <img src={candidature.lettreRecommandation} alt="Lettre" style={{ width: "100%", maxHeight: "150px", objectFit: "cover" }} />
                    </a>
                    </div>
                    <div className="mt-2"><strong>Dernière mise à jour :</strong><br />{new Date(candidature.updatedAt).toLocaleString()}</div>
                </div>
                </div>
            </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Fermer</Button>
        <Button variant="outline-primary" onClick={contactViaEmail}>Nous contacter par Email</Button>
        <Button variant="success" onClick={contactViaWhatsApp}>Contacter via WhatsApp</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DetailsCandidature
