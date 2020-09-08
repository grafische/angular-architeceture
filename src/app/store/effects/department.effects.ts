import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { DataDepartmentService } from './../services/data-Department.service';
//import * as DepartmentActions from '../actions/Department.actions';
import * as DepartmentActions from '../actions/department.actions';
import { of } from 'rxjs';



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
