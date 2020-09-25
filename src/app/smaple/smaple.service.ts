import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Smaple } from './../core/model/smaple.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmapleService {
  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient  ) { }

  getUser(): Observable<Smaple[]> {
    return this.http.get<Smaple[]>(`${this.apiUrlBase}api/testcontroller/tenemployeesjson`);
  }

  getOneUser(): Observable<Smaple> {
    return this.http.get<Smaple>(`${this.apiUrlBase}/api/testcontroller/employeejson?id=3`);
  }
}
