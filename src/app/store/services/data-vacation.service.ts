import { map } from 'rxjs/operators';
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
    return this.http.get<Vacation[]>(`${this.apiUrlBase}api/leaves`).pipe(
      map( val => {
        val.forEach( (item, idx) => {
          const currentDate: Date = new Date();
          const current = (new Date(item.startDate).getTime() <= currentDate.getTime() && new Date(item.endDate).getTime() >= new Date(item.endDate).getTime())? 'aktualny' : 'planowany';
          item.kindAC = current;
        });
        return val;
      })
    );
  }

  create( value: Vacation) {
    return this.http.post<Vacation>(`${this.apiUrlBase}api/leaves`, value);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrlBase}api/leaves/${id}`);
  }
}
