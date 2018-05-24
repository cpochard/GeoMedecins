import { Component, OnInit } from '@angular/core';
import { Medecin } from '../_models';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  edit = false;
  medecins = [new Medecin('Gilles', 'Boulon', 'medecin generaliste', 12548, 563214), 
  new Medecin('Celine', 'Truc', 'chirurgienne', 23654, 54896)];
  medecin = new Medecin();
  selectedMedecin: Medecin;

  constructor() { }

  ngOnInit() {
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
    return this.medecins.filter(m => m.id === identifiant && m.id > 10)[0];
  }

  editOver() {
    this.edit = false;
    this.medecin = new Medecin();
  }

  onSelect(medecin: Medecin): void {
    this.selectedMedecin = medecin;
  }

}
