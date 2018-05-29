import { Component, OnInit } from '@angular/core';
import { Requete } from '../_models/requete';
import { RequeteService } from '../_services/requete.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-liste-requetes',
  templateUrl: './liste-requetes.component.html',
  styleUrls: ['./liste-requetes.component.css']
})
export class ListeRequetesComponent implements OnInit {
  requete = new Requete();
  selectedRequete: Requete;
  requetes;
  map;
  baseIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
  boolean: Boolean = false;

  constructor(private requeteService: RequeteService) { }

  ngOnInit() {
    this.requetes = this.requeteService.getRequetes();
    this.map = L.map('map');
    for (const r of this.requetes) {
      this.map.setView([r.lat, r.lon], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.addMarker(r.lat, r.lon, 'Position du patient', r.id);
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
        this.requete = this.requeteService.getRequeteById(id);
        this.boolean = true;
      }
    }
  }

  getRequeteById(identifiant: number): Requete {
    return this.requetes.filter(r => r.id === identifiant)[0];
  }

  onSelect(requete: Requete): void {
    this.requete = this.requeteService.getRequeteById(requete.id);
    this.selectedRequete = requete;
    this.boolean = true;
  }

}
