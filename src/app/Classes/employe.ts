export class Employe {
    IdEmploye: number;
    nom: string;
    prénom: string;
    post: string;
    adresse: string;
    performance: string;
    département: string;
  
    constructor(IdEmploye: number, nom: string, prénom: string, post: string, adresse: string, performance: string, département: string) {
      this.IdEmploye = IdEmploye;
      this.nom = nom;
      this.prénom = prénom;
      this.post = post;
      this.adresse = adresse;
      this.performance = performance;
      this.département = département;
    }
  }
  