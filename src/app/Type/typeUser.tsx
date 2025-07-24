export interface User {
    id?: string;
    createdAt?: Date;
    id_user?:string;
    name: string;
    prenom: string;
    telephone:string;
    userName: string;
    password: string;
    email:string;
    nom?:string;
    pays?:string;
    token?:string
}

export interface Connexion {
    id?:string,
    email:string,
    password:string
}
export interface DomaineBourse{
    id?:string,
    libelle:string,
    codeDomaine:string
}
