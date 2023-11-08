import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { NavbarComponent } from './Interfaces/RH/navbar/navbar.component';
import { NavbarEmpComponent } from './Interfaces/Employe/navbar-emp/navbar-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEmpComponent,
    HomeRhComponent,
    PerformingEmpComponent,
    NavbarComponent,
    NavbarEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
