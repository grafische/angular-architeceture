import { Department } from './../../core/model/department.model';
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
    return this.http.get<Vacation[]>('http://127.0.0.1:8887/leave.json'); //`${this.apiUrlBase}api/leave`
    //http://127.0.0.1:8887/leave.json
  }
}
