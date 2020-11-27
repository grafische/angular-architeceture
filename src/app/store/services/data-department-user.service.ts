import { Structure } from './../../core/enum/structure.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { DepartmentUser } from './../../core/model/department-user.model';
import { map, mergeMap, scan, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentUserService {

  private readonly apiUrlBase: string = environment.apiUrlBase;
  structure = Structure;

  constructor( private http: HttpClient ) { }

  getDepartmentUsers() {
    return this.http.get<DepartmentUser[]>(`${this.apiUrlBase}api/departments?includeEmployees=true`);
  }
}
