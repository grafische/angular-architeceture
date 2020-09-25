import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap, concatMap } from 'rxjs/operators';

import { DataAuthService } from './../services/data-auth.service';
import * as AuthActions from '../actions/auth.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private dataauthService: DataAuthService
    ) {}

  getAuthStatus$ = createEffect(() =>
    this.dataauthService
      .getStatus()
      .pipe(map(userOrNull => AuthActions.getAuthStatusSuccess(userOrNull)))
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(action => {
        return this.dataauthService.login(action.username, action.password).pipe(
          map(user => AuthActions.loginSuccess(user)),
          catchError(reason => of(AuthActions.loginFailure(reason)))
        );
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => this.dataauthService.logout())
      ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginRedirect, AuthActions.logout),
        tap((authed) => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

}
