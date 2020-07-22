import { DataServiceError } from './data-error.service';
import { User } from './../../core/model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class DataUserService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`https://run.mocky.io/v3/e5ec339d-1127-4e5d-a05f-561a4f6fe2b4`) // //${this.apiUrlBase}id=${id} https://reqres.in/api/users/2
    .pipe(
      catchError(this.handleError())
    );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
