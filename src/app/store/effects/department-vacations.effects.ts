import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { DataDepartmentVacationsService } from './../services/data-department-vacations.service';
import * as DepartmentVacationsActions from '../actions/department-vacations.actions';
import { of } from 'rxjs';



@Injectable()
export class DepartmentVacationsEffects {



  constructor(private actions$: Actions, private datadepartmentVacationsService: DataDepartmentVacationsService ) {}

  loadDepartmentVacationss$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentVacationsActions.enterDepartmentVacations),
      exhaustMap( action => this.datadepartmentVacationsService.getDepartmentVacations(action.id).pipe(
        map( departmentVacations =>  DepartmentVacationsActions.loadDepartmentVacations({ departmentVacations })),
        catchError( error => of( DepartmentVacationsActions.loadDepartmentVacationsFailure({ error }) )
        )
      ))
    )
  );

}
