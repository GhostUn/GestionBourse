export interface Candidature {
    nomEt: '',
    nombourse:'',
    email: '',
    document: File | null,
    phoneNumber: '',
    amount: '',
    pays:'',
    modePaiement:'',
    denierDiplome:File | null,
    DiplomeRequis: File | null;
    cv:File | null,
    lettreRecommandation?:File | null
}
