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
  constructor(private activatedRoute: ActivatedRoute,
    private requeteService: RequeteService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(p => this.loadRequete(p['id']));

    const myfrugalmap = L.map('frugalmap').setView([this.requete.lat, this.requete.lon], 12);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([this.requete.lat, this.requete.lon], { icon: myIcon }).bindPopup('Position du patient').addTo(myfrugalmap).openPopup();

  }

  loadRequete(id: string) {
    this.requete = this.requeteService.getRequeteById(+id);
  }


}
