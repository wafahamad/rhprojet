import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';

const routes: Routes = [
  {path:"",title:"login",component:LoginComponent},
  {path:"loginEmp",title:"login",component:LoginComponent},
  {path:"homeRh",title:"home",component:HomeRhComponent},
  { path:"performingEmp/:id" ,title:"performing", component: PerformingEmpComponent},
  {path:"homeEmploye/:id",title:"home",component:HomeEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
