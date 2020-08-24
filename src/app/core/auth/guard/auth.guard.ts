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
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authenticationService.currentUserValue;
//     if (currentUser) {
//         // logged in so return true
//         return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
// }
  // canActivate(): Observable<boolean> {
  //   return this.store.pipe(
  //     select(fromAuthSelector.selectAuthUser),
  //     map((authed) => {
  //       if (!authed) {
  //         console.info("Denied authed" + authed);
  //         //this.store.dispatch(fromAuthActions.loginRedirect());
  //         return false;
  //       }

  //       return true;
  //     }),
  //     take(1)
  //   );
  // }

}


/*
constructor( private dataAuthService: DataAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const getLocalStorageUser: User = JSON.parse(localStorage.getItem("auth"));
    const currentDataUserEn = this.dataAuthService.authDataEncode || getLocalStorageUser?.authToken;
*/
