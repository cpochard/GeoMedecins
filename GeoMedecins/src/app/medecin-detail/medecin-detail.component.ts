import { Component, OnInit, Input } from '@angular/core';
import { Medecin } from '../_models';



@Component({
  selector: 'app-medecin-detail',
  templateUrl: './medecin-detail.component.html',
  styleUrls: ['./medecin-detail.component.css']
})
export class MedecinDetailComponent implements OnInit {

@Input() medecin: Medecin;

constructor() { }

ngOnInit() {
  }

}
