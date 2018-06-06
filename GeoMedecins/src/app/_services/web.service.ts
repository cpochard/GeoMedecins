import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WebService {
    url = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getAll(table: string) {
        return this.http.get(this.url + table);
      }

    get(table: string, id: number) {
        return this.http.get(this.url + table + '/' + id);
      }

    add(table: string, object: Object) {
        return this.http.post(this.url + table + 'Ajout', object);
    }

}
