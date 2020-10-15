import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { DepartmentUser } from './../../core/model/department-user.model';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentUserService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartmentUsers() {
    return this.http.get<DepartmentUser[]>(`${this.apiUrlBase}api/departments?includeEmployees=true`);
  }
}
