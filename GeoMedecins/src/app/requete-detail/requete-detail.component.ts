import { Component, OnInit, Input } from '@angular/core';
import { Requete } from '../_models/requete';

@Component({
  selector: 'app-requete-detail',
  templateUrl: './requete-detail.component.html',
  styleUrls: ['./requete-detail.component.css']
})
export class RequeteDetailComponent implements OnInit {

  @Input() requete: Requete;

  constructor() { }

  ngOnInit() {
  }

}
