import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { Data<%= classify(name) %>Service } from './../services/data-<%= dasherize(name) %>.service';
//import * as <%= classify(name) %>Actions from '../actions/<%= classify(name) %>.actions';
import * as <%= classify(name) %>Actions from '../actions/<%= dasherize(name) %>.actions';
import { of } from 'rxjs';



@Injectable()
export class <%= classify(name) %>Effects {



  constructor(private actions$: Actions, private data<%= camelize(name) %>Service: Data<%= classify(name) %>Service ) {}

  load<%= classify(name) %>s$ = createEffect(() =>
    this.actions$.pipe(
      ofType(<%= classify(name) %>Actions.enter<%= classify(name) %>s),
      exhaustMap( () => this.data<%= camelize(name) %>Service.get<%= classify(name) %>s().pipe(
        tap( val => {
          console.info("val");
          console.info(val);
        } ),
        map( <%= camelize(name) %>s =>  <%= classify(name) %>Actions.add<%= classify(name) %>s({ <%= camelize(name) %>s })),
        catchError( error => of( <%= classify(name) %>Actions.load<%= classify(name) %>sFailure({ error }) )
        )
      ))
    )
  );

}


/*

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
        tap( val => {
          console.info("val");
          console.info(val);
        } ),
        map( departments =>  DepartmentActions.addDepartments({ departments })),
        catchError( error => of( DepartmentActions.loadDepartmentsFailure({ error }) )
        )
      ))
    )
  );

}


*/