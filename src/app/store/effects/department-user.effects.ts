import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { DataDepartmentUserService } from './../services/data-department-user.service';
import * as DepartmentUserActions from '../actions/department-user.actions';
import { of } from 'rxjs';



@Injectable()
export class DepartmentUserEffects {



  constructor(private actions$: Actions, private datadepartmentUserService: DataDepartmentUserService ) {}

  loadDepartmentUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentUserActions.enterDepartmentUsers),
      exhaustMap( () => this.datadepartmentUserService.getDepartmentUsers().pipe(
        map( departmentUsers =>  DepartmentUserActions.loadDepartmentUsers({ departmentUsers })),
        catchError( error => of( DepartmentUserActions.loadDepartmentUsersFailure({ error }) )
        )
      ))
    )
  );

}
