import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequeteService } from '../_services/requete.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-afficher-requete',
  templateUrl: './afficher-requete.component.html',
  styleUrls: ['./afficher-requete.component.css']
})
export class AfficherRequeteComponent implements OnInit {

  requete;
  map;
  baseIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });

  constructor(private activatedRoute: ActivatedRoute,
    private requeteService: RequeteService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.loadRequete(p['id']));

    this.map = L.map('map').setView([this.requete.lat, this.requete.lon], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.addMarker(this.requete.lat, this.requete.lon, 'Position du patient');
  }

  loadRequete(id: string) {
    this.requete = this.requeteService.getRequeteById(+id);
  }

  addMarker(lat, lng, popup) {
    L.marker([lat, lng], { icon: this.baseIcon }).bindPopup(popup).addTo(this.map).on('click', () => this.eventOnClick(lat, lng));
  }

  eventOnClick(lat, lng) {
    alert('latitude : ' + lat + ', longitude : ' + lng);
  }

}
