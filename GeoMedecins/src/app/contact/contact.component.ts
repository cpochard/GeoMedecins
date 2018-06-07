import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Requete } from '../_models/requete';
import { RequeteService } from '../_services/requete.service';
import { Attribute } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  requete = new Requete();
  requetes = [] ;
  boolean = false;
  inf = false;
  liste;

  constructor(private requeteService: RequeteService, private http: HttpClient) {

  }

  ngOnInit() {
    this.requeteService.getAll().subscribe(r => this.loadData(r));
    // this.requetes = this.requeteService.getRequetes();
  }

  loadData(r) {
    this.liste = JSON.stringify(r);
    this.requetes = JSON.parse(this.liste);
  }

  afficherInfos() {
    this.inf = !this.inf;
  }

  // Permet d'afficher les input pour que le patient rentre les infos
  contacterMedecin() {
    this.boolean = true;
  }

  // Quand on clique sur contacter, on rajoute une requete à la liste de requetes avec les infos rentrées par le patient
  envoyerRequete() {
    this.requete.date = new Date(Date.now());
    this.positionActuelle();
    // this.requetes.push(this.requete);
  }

  positionActuelle(): void {
    navigator.geolocation.getCurrentPosition(p => this.showPosition(p));
  }

  showPosition(position) {
    this.requete.lat = position.coords.latitude;
    this.requete.lon = position.coords.longitude;

    this.requeteService.add(this.requete).subscribe(req => (this.requetes.push(req)));
  }

}
