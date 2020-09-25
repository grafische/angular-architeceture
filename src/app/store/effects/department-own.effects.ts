import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap, concatMap, withLatestFrom, filter } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { State } from './../../store';

import { DataDepartmentOwnService } from './../services/data-department-own.service';

import * as SelectorsAuth from './../../store/selectors/auth.selectors';
import * as DepartmentOwnActions from '../actions/department-own.actions';



@Injectable()
export class DepartmentOwnEffects {



  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private datadepartmentOwnService: DataDepartmentOwnService
    ) {}

  loadDepartmentOwns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentOwnActions.enterDepartmentOwns),
      withLatestFrom(this.store.pipe(select(SelectorsAuth.selectAuthUser))),
      filter(([action, user]) => {
          if( user ) {
            return true;
          } else {
            return false;
          }
      }),
      map( val => val[1]),
      concatMap( val => this.datadepartmentOwnService.getDepartmentOwns(val.id).pipe(
        map( departmentOwns => DepartmentOwnActions.loadDepartmentOwns({ departmentOwns })),
        catchError( error => of( DepartmentOwnActions.loadDepartmentOwnsFailure({ error }) )
        )
      ))
    )
  );
}
