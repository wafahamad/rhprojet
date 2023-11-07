export class CalendrierEmp {
    IdCalandrierEmp: number;
    heureArriv: Date;
    heureDep: Date;
    heureSup: number;
    heureConge: number;
  
    constructor(
      IdCalandrierEmp: number,
      heureArriv: Date,
      heureDep: Date,
      heureSup: number,
      heureConge: number
    ) {
      this.IdCalandrierEmp = IdCalandrierEmp;
      this.heureArriv = heureArriv;
      this.heureDep = heureDep;
      this.heureSup = heureSup;
      this.heureConge = heureConge;
    }
  }
  