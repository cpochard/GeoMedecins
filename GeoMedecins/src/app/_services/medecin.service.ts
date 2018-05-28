import { Injectable } from '@angular/core';
import { Medecin } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  medecins = [new Medecin('Gilles', 'Boulon', 'medecin generaliste', 12548, 563214, 'doc1.jpg', 'boulon@mail.com'),
  new Medecin('Celine', 'Truc', 'chirurgienne', 23654, 54896, 'doc2.jpg', 'truc@mail.com')];

  constructor() { }

  getMedecins() {
    return this.medecins;
  }

  getMedecinById(identifiant: number): Medecin {
    console.log(identifiant);
    // for (let i = 0; i < this.medecins.length; i++) {
    //   if (this.medecins[i].id === id) {
    //     return this.medecins[i];
    //   }
    // }
    // return null;
    // Revient à faire :
    return this.medecins.filter(m => m.id === identifiant)[0];
  }
}
