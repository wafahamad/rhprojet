import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEmpComponent } from './Interfaces/Empoye/home-emp/home-emp.component';
import { HomeRhComponent } from './Interfaces/Employe/home-rh/home-rh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEmpComponent,
    HomeRhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
