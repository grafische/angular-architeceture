import { VacationType } from './../../core/model/vacation-type.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataVacationTypeService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getVacationTypes() {
    return this.http.get<VacationType[]>(`${this.apiUrlBase}api/leaves/types`);
  }
}

