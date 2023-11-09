import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { NavbarComponent } from './Interfaces/RH/navbar/navbar.component';
import { NavbarEmpComponent } from './Interfaces/Employe/navbar-emp/navbar-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeEmpComponent,
    HomeRhComponent,
    PerformingEmpComponent,
    NavbarComponent,
    NavbarEmpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
