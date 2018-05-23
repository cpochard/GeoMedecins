import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {

  constructor() { }

  patient = { 'nom': '' };
  patients = [{ 'nom': 'Patient 1' }, { 'nom': 'Patient 2' }];

  ngOnInit() {
  }

  addPatient() {
    this.patients.push(this.patient);
    this.patient = { 'nom': '' };
  }

}
