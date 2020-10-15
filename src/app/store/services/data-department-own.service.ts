import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { DepartmentOwn } from './../../core/model/department-own.model'; //, DepartmentOwnItem, DepartmentOwnYears

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentOwnService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartmentOwns(id: number) {
    return this.http.get<DepartmentOwn[]>(`${this.apiUrlBase}api/leaves/employees/${id}`).pipe(
      map( val => {
            val.forEach( (arr, idx) => {
              arr.years = new Date(arr.startDate).getFullYear();
            } );
            return val;
          })
    );
  }
}


