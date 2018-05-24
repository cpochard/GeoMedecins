import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { MedecinDetailComponent } from './medecin-detail/medecin-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    ListeMedecinsComponent,
    ListePatientsComponent,
    MedecinDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
