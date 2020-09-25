import { DepartmentOwn } from './../../core/model/department-own.model'; //, DepartmentOwnItem, DepartmentOwnYears
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, concatMap, first } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentOwnService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartmentOwns(id: number) {
    return this.http.get<DepartmentOwn[]>(`${this.apiUrlBase}api/leave/employee/${id}`).pipe(
      map( val => {
            val.forEach( (arr, idx) => {
              arr.years = new Date(arr.startDate).getFullYear();
            } );
            return val;
          })
    );
  }
}


