import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"loginEmp",component:LoginComponent},
  {path:"homeRh",component:HomeRhComponent},
  { path:"performingEmp", component: PerformingEmpComponent},
  {path:"homeEmploye",component:HomeEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
