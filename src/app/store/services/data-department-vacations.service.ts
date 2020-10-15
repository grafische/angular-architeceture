import { DepartmentVacations } from './../../core/model/department-vacations.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentVacationsService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartmentVacations(id: number) {
    return this.http.get<DepartmentVacations[]>(`${this.apiUrlBase}api/leaves/department/${id}`);
  }
}

