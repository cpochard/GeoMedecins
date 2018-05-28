import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { MedecinDetailComponent } from './medecin-detail/medecin-detail.component';
import { MedecinService } from './_services/medecin.service';
import { RouterModule, Routes } from '@angular/router';
import { AfficherMedecinComponent } from './afficher-medecin/afficher-medecin.component';
import { ContactComponent } from './contact/contact.component';
import { ListeRequetesComponent } from './liste-requetes/liste-requetes.component';
import { RequeteDetailComponent } from './requete-detail/requete-detail.component';
import { AfficherRequeteComponent } from './afficher-requete/afficher-requete.component';

const appRoutes: Routes = [
  { path : '', component : ContactComponent},
  { path: 'liste', component: ListeMedecinsComponent },
  { path: 'medecin/:id', component: AfficherMedecinComponent },
  { path: 'requetes', component: ListeRequetesComponent},
  { path : 'requete/:id', component: AfficherRequeteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    ListeMedecinsComponent,
    MedecinDetailComponent,
    AfficherMedecinComponent,
    ContactComponent,
    ListeRequetesComponent,
    RequeteDetailComponent,
    AfficherRequeteComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [MedecinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
