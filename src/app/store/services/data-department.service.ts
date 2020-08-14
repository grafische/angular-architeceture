import { Department } from './../../core/model/department.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartments() {
    return this.http.get<Department[]>('http://127.0.0.1:8887/department.json'); //`${this.apiUrlBase}api/department`
    //http://127.0.0.1:8887/department.json
  }
}
