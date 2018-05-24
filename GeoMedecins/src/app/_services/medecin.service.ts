import { Injectable } from '@angular/core';
import { Medecin } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  medecins = [new Medecin('Gilles', 'Boulon', 'medecin generaliste', 12548, 563214),
  new Medecin('Celine', 'Truc', 'chirurgienne', 23654, 54896)];

  constructor() { }

  getMedecins() {
    return this.medecins;
  }
}
