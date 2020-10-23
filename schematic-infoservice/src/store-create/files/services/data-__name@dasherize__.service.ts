import { <%= classify(name) %> } from './../../core/model/<%= dasherize(name) %>.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Data<%= classify(name) %>Service {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  get<%= classify(name) %>s() {
    return this.http.get<<%= classify(name) %>[]>(`${this.apiUrlBase}api/<%= dasherize(name) %>`);
  }
}
