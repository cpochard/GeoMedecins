import { Component, OnInit } from '@angular/core';
import { Medecin } from '../_models';
import { MedecinService } from '../_services/medecin.service';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  edit = false;

  medecin = new Medecin();
  selectedMedecin: Medecin;
  medecins;

  constructor(private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecins = this.medecinService.getMedecins();
  }

  addMedecin() {
    this.medecins.push(this.medecin);
    this.medecin = new Medecin();
  }

  editMedecin(id: number) {
    this.medecin = this.getMedecinById(id);
    this.edit = true;
  }

  getMedecinById(identifiant: number): Medecin {
    // for (let i = 0; i < this.medecins.length; i++) {
    //   if (this.medecins[i].id === id) {
    //     return this.medecins[i];
    //   }
    // }
    // return null;
    // Revient à faire :
    return this.medecins.filter(m => m.id === identifiant)[0];
  }

  editOver() {
    this.edit = false;
    this.medecin = new Medecin();
  }

  onSelect(medecin: Medecin): void {
    this.selectedMedecin = medecin;
  }

}
