import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../Classes/employe';
import { CalendrierEmp } from '../Classes/calendrier-emp';

const URL: string = 'http://localhost:3000/calendrier'
@Injectable({
  providedIn: 'root'
})
export class CalandrierService {

  constructor(private http: HttpClient) { }
  AjouterHeureArriv(id:number,date:Date):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/heurearriv/"+id,date);
  }
  AjouterHeureDep(id:number,date:Date):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/heuredep/"+id,date);
  }
  AjouterHeureSup(id:number,heur:number):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/heureSup/"+id,heur);
  }
  AjouterHeureCong(id:number,heur:number):Observable <CalendrierEmp>{
    return this.http.post<CalendrierEmp>(URL+"/heureCong/"+id,heur);
  }
  
}
