import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { User } from './../../core/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataEmployeeService {

  private readonly apiUrlBase: string = environment.apiUrlBase;
  private readonly apiUrlPart: string = 'api/employees';

  constructor( private http: HttpClient ) { }

  patchEmployee(data: User) {
    return this.http.patch(`${this.apiUrlBase}${this.apiUrlPart}/${data.id}`, data);
  }

  addEmployee(data: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrlBase}${this.apiUrlPart}`, data);
  }
}
