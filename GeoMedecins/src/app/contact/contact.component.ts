import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Requete } from '../_models/requete';
import { RequeteService } from '../_services/requete.service';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  requete = new Requete();
  requetes;
  boolean = false;

  constructor(private requeteService: RequeteService) {

  }

  ngOnInit() {
    this.requetes = this.requeteService.getRequetes();
  }

  // Permet d'afficher les input pour que le patient rentre les infos
  contacterMedecin() {
    this.boolean = true;
  }

  // Quand on clique sur contacter, on rajoute une requete à la liste de requetes avec les infos rentrées par le patient
  envoyerRequete() {
    this.requete.date = new Date(Date.now());
    this.positionActuelle();
    console.log(this.requete.lat);
    this.requetes.push(this.requete);
  }

  positionActuelle(): void {
    navigator.geolocation.getCurrentPosition(p => this.showPosition(p));
  }

  showPosition(position) {
    this.requete.lat = position.coords.latitude;
    this.requete.lon = position.coords.longitude;
  }

}
