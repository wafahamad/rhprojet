import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-list-employees-dep',
  templateUrl: './list-employees-dep.component.html',
  styleUrls: ['./list-employees-dep.component.css']
})
export class ListEmployeesDepComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: EmployeServiceService,
    public router: Router
  ) {}
  employes!:Employe[];
    dep!:string;
  testM: boolean = false;
  openM() {
    this.testM = !this.testM;

  }

  ngOnInit(): void {
    this.dep = this.activatedRoute.snapshot.params['dep']
    this.service.AfficherEmp().subscribe(data => {
      this.employes=data
      this.employes=this.employes.filter(e=>e.departement==this.dep)
    })
  }
}
