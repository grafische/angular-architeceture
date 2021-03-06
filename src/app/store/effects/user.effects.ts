import { DataUserService } from './../services/data-user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as UserActions from '../actions';

import { exhaustMap, map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UserEffects {

  constructor(private dataUserService: DataUserService, private actions$: Actions) {}

  loadUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.enter),
    exhaustMap(() => this.dataUserService.getUser().pipe(
        map(users => UserActions.addUsers({ users })),
        catchError( error => of(UserActions.loadUserFailure({ error })) )
        )
      )
    )
  )

}
