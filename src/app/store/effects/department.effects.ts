import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DataDepartmentService } from './../services/data-department.service';
import * as DepartmentActions from '../actions/department.actions';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';



@Injectable()
export class DepartmentEffects {



  constructor(private actions$: Actions, private dataDepartmentService: DataDepartmentService ) {}

  loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentActions.enterDepartments),
      exhaustMap( () => this.dataDepartmentService.getDepartments().pipe(
        map( departments =>  DepartmentActions.loadDepartments({ departments })),
        catchError( error => of( DepartmentActions.loadDepartmentsFailure({ error }) )
        )
      ))
    )
  );

}
