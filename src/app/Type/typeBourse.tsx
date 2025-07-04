export interface TypeBourse{
    id?:string,
    libelle:string,
    codeLibelle:string
}


export interface Bourse{
    
    id?:String,
    nomBourse: string,
    montant: string,
    pays: string,
    type: string,
    dateOuverture: string,
    dateCloture: string,
    niveau: string,
    domaine: string,
    conditionAge: string,
    conditionNationalite: string,
    document: string,
    remarque: string
    universitePartenaire:'',
    NombreDePlace:''
}
