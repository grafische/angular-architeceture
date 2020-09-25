import { DataAuthService } from './../../../store/services/data-auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../../model/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private dataAuthService: DataAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getLocalStorageUser: User = JSON.parse(localStorage.getItem("auth"));
    const currentDataUserEn = this.dataAuthService.authDataEncode || getLocalStorageUser?.authToken;
    if (currentDataUserEn) {
        request = request.clone({
            setHeaders: {
                Authorization: `Basic ${currentDataUserEn}`
            }
        });
    }

    return next.handle(request);
  }
}
