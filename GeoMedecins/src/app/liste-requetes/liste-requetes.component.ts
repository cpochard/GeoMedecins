import { Component, OnInit } from '@angular/core';
import { Requete } from '../_models/requete';
import { RequeteService } from '../_services/requete.service';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-requetes',
  templateUrl: './liste-requetes.component.html',
  styleUrls: ['./liste-requetes.component.css']
})
export class ListeRequetesComponent implements OnInit {
  requete = new Requete();
  selectedRequete: Requete;
  requetes = [];
  map;
  baseIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
  boolean: Boolean = false;
  liste = '';
  string;

  constructor(private requeteService: RequeteService, private http: HttpClient) { }

  ngOnInit() {
    // this.requetes = this.requeteService.getRequetes();
    this.requeteService.getAll().subscribe(r => this.loadData(r));
    this.map = L.map('map');
  }

  loadData(r) {
    this.liste = JSON.stringify(r);
    this.requetes = JSON.parse(this.liste);
    for (const req of this.requetes) {
      this.map.setView([req.lat, req.lon], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.addMarker(req.lat, req.lon, 'Position du patient', req.id);
    }
  }

  addMarker(lat, lng, popup, rID) {
    for (const r of this.requetes) {
      L.marker([lat, lng], { icon: this.baseIcon }).bindPopup(popup).addTo(this.map).on('click', () => this.eventOnClick(rID));
    }
  }

  eventOnClick(id) {
    for (const req of this.requetes) {
      if (req.id === id) {
      this.requeteService.get(id).subscribe(r2 => this.showReturnID(r2));
        // this.requete = this.requeteService.getRequeteById(id);
        this.boolean = true;
      }
    }
  }

  showReturnID(r2) {
    this.string = JSON.stringify(r2);
    this.requete = JSON.parse(this.string);
  }

  // getRequeteById(identifiant: number): Requete {
    // return this.requetes.filter(r => r.id === identifiant)[0];
  // }

  onSelect(requete: Requete): void {
    this.requeteService.get(requete.id).subscribe(r3 => this.showReturnID(r3));
    // this.requete = this.requeteService.getRequeteById(requete.id);
    this.selectedRequete = requete;
    this.boolean = true;
  }

}
