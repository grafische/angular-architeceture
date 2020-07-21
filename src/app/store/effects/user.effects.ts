import { DataUserService } from './../services/data-user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as UserActions from '../actions';
import { User } from 'src/app/core/model/user';
import { exhaustMap, map, concatMap, catchError } from 'rxjs/operators';
import { DataServiceError } from '../services/data-error.service';


@Injectable()
export class UserEffects {

  constructor(private dataUserService: DataUserService, private actions$: Actions) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      concatMap( (action) =>
      this.dataUserService
      .getUser(action.userId)
      .pipe(
        map(user => UserActions.getUserSuccess({ user })),
        catchError( (err: DataServiceError<any>) => UserActions.loadUsersFailure)
      )
      )
    )
  );

}

// (err: DataServiceError<T>) => of(new errorAction(err))

// .pipe(
//   ofType(UserActions.getUser),
//   exhaustMap(() =>
//     this.dataUserService
//       .getUser()
//       .pipe(map(user => UserActions.getUserSuccess({ user })))
//   )
// )
