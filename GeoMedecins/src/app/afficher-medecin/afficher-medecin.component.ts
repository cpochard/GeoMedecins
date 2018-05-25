import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../_services/medecin.service';
import { Medecin } from '../_models';

@Component({
  selector: 'app-afficher-medecin',
  templateUrl: './afficher-medecin.component.html',
  styleUrls: ['./afficher-medecin.component.css']
})
export class AfficherMedecinComponent implements OnInit {
  medecin;

  constructor(private activatedRoute: ActivatedRoute,
    private medecinService: MedecinService) { }

  ngOnInit() {
    // A partir de l'URL, on veut récupérer l'id et afficher les infos du médecin correspondant
    this.activatedRoute.params.subscribe(p => this.loadMedecin(p['id']));
  }

  loadMedecin(id: string) {
    // + id pour convertir en number
    this.medecin = this.medecinService.getMedecinById(+id);
  }

}
