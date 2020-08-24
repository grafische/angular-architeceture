import { User } from '../../core/model/user.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, concatMap, exhaustMap, catchError } from 'rxjs/operators';
import { Observable, throwError, of, timer, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAuthService {

  private readonly apiUrlBase: string = environment.apiUrlBase;
  private authdataEn: string;

  constructor( private http: HttpClient ) { }

  get authDataEncode() {
    return this.authdataEn;
  }

  login(username: string, password: string) {

    if (password == null || username == null) {
      return throwError(new Error("Invalid username or password"));
    }

    this.authdataEn = window.btoa(username + ':' + password);
    const dataAuthEn$ = of(this.authdataEn);

    return dataAuthEn$.pipe( exhaustMap( val => this.http.get<User>(`${this.apiUrlBase}api/employees/current`,  { headers: {
      Authorization: `Basic ${this.authdataEn}`
    }})
      .pipe(map(user => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          user.authToken = val;
          localStorage.setItem("auth", JSON.stringify(user));
          return user;
      }),
      catchError(this.handleError)
      ))
    );
  }

  getStatus(): Observable<null | User> {
    return of(null).pipe(
      map(() => {
        const userString = localStorage.getItem("auth");
        if (!userString) return null;

        return JSON.parse(userString);
      })
    );
  }

  logout() {
    localStorage.removeItem("auth");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
