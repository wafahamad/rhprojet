import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.css']
})
export class NavbarEmpComponent {
  id: any;
  employe !:Employe;
  
  constructor(private activatedRoute:ActivatedRoute,public service:EmployeServiceService){}

  ngOnInit()
  {
    
    this.id=this.activatedRoute.snapshot.params['id']
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe(data=>{console.log(data)
    this.employe = data}
    
    )

  }
}
