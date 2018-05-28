import { Component, OnInit } from '@angular/core';
import { Requete } from '../_models/requete';
import { RequeteService } from '../_services/requete.service';

@Component({
  selector: 'app-liste-requetes',
  templateUrl: './liste-requetes.component.html',
  styleUrls: ['./liste-requetes.component.css']
})
export class ListeRequetesComponent implements OnInit {
  requete = new Requete();
  selectedRequete: Requete;
  requetes;

  constructor(private requeteService: RequeteService) { }

  ngOnInit() {
    this.requetes = this.requeteService.getRequetes();
  }

  getRequeteById(identifiant: number): Requete {
    return this.requetes.filter(r => r.id === identifiant)[0];
  }

  onSelect(requete: Requete): void {
    this.selectedRequete = requete;
  }

}
