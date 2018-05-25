import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  url;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.url = '';
  }

  positionActuelle(): void {
    navigator.geolocation.getCurrentPosition(p => this.showPosition(p));
    console.log(this.url);
  }

  showPosition(position) {
    const latlon = position.coords.latitude + ',' + position.coords.longitude;
    console.log(latlon);
    this.url = 'https://www.google.com/maps/@' + latlon;
    this.document.location.href = this.url;
  }
}
