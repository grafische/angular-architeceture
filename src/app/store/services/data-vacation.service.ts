import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacation } from '../../core/model/vacation.model';

@Injectable({
  providedIn: 'root'
})
export class DataVacationService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getVacations() {
    return this.http.get<Vacation[]>(`${this.apiUrlBase}api/leave/currentAndPlanned`);
  }
}
