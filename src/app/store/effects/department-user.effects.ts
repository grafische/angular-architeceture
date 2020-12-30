import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import * as DepartmentUserActions from '../actions/department-user.actions';
import { DataDepartmentUserService } from './../services/data-department-user.service';
import { DataEmployeeService } from './../services/data-employee.service';

@Injectable()
export class DepartmentUserEffects {

  constructor(
    private actions$: Actions,
    private datadepartmentUserService: DataDepartmentUserService,
    private dataEmployeeService: DataEmployeeService) { }

  loadDepartmentUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentUserActions.enterDepartmentUsers),
      exhaustMap(() => this.datadepartmentUserService.getDepartmentUsers().pipe(
        map(departmentUsers => DepartmentUserActions.loadDepartmentUsers({ departmentUsers })),
        catchError(error => of(DepartmentUserActions.loadDepartmentUsersFailure({ error }))
        )
      ))
    )
  );

  updateDepartmentUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentUserActions.updateDepartmentUser),
      concatMap(action => this.dataEmployeeService.patchEmployee(action.user)
        .pipe(
          map(val => DepartmentUserActions.updatedDepartmentUser(action)),
          catchError(error => of(DepartmentUserActions.upgradeDepartmentUsersFailure({ error })))
        ),

      ),

    )
  );

  createDepartmentUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentUserActions.addOneDepartmentUser),
      concatMap(action => this.dataEmployeeService.addEmployee(action.user)
        .pipe(
          map(val => DepartmentUserActions.addedOneDepartmentUser(action)),
          catchError(error => {
            return of(DepartmentUserActions.upgradeDepartmentUsersFailure({ error }))
            }
          )
        )
      ),
    )
  );


}
