import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // On créé une variable JSON (objet javascript)
  etudiant = { 'nom': 'Martin', 'age': 13, 'saved': false };
  // On créé une Array qui contient plusieurs étudiants
  etudiants = [{'nom': 'Martin'}, {'nom': 'Pichaud'}, {'nom': 'Biliet'}, {'nom': 'Fournier'}];

  constructor() { }

  ngOnInit() {
  }

  getEtudiant(): void {
    this.etudiant.nom = 'defaut';
  }

  saveEtudiant() {
    this.etudiant.saved = true;
  }

}
