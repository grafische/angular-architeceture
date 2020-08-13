import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { DataVacationService } from './../services/data-vacation.service';
import * as VacationActions from '../actions/vacation.actions';
import { of } from 'rxjs';

@Injectable()
export class VacationEffects {

  constructor(private actions$: Actions, private dataVacationService: DataVacationService ) {}

  loadVacations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VacationActions.enterVacations),
      exhaustMap( () => this.dataVacationService.getVacations().pipe(
        map( vacations =>  VacationActions.addVacations({ vacations })),
        catchError( error => of( VacationActions.loadVacationsFailure({ error }) )
        )
      ))
    )
  );
}
