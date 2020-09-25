import { DataAuthService } from './../../../store/services/data-auth.service';
import * as fromAuth from './../../../store/reducers/auth.reducer';
import * as fromAuthSelector from './../../../store/selectors/auth.selectors';
import * as fromAuthActions from './../../../store/actions/auth.actions';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor( private store: Store<fromAuth.State>,
               private dataAuthService: DataAuthService ) {}
  canActivate(): boolean {
    const getLocalStorageUser: User = JSON.parse(localStorage.getItem("auth"));
    const currentDataUserEn = this.dataAuthService.authDataEncode || getLocalStorageUser?.authToken;
    if(currentDataUserEn) {
      return true;
    } else {
      return false;
    }
  }
}
