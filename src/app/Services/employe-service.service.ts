import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../Classes/employe';

const URL: string = 'http://localhost:3000/employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private http: HttpClient) { }

  AfficherEmp():Observable<Employe[]>{
    return this.http.get<Employe[]>(URL);
  }
  getEmpById(id:number):Observable<Employe>{
    return this.http.get<Employe>(URL+"/"+id)
  }
}
