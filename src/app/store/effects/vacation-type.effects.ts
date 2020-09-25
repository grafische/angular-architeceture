import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import { DataVacationTypeService } from './../services/data-vacation-type.service';
import * as VacationTypeActions from '../actions/vacation-type.actions';
import { of } from 'rxjs';



@Injectable()
export class VacationTypeEffects {



  constructor(private actions$: Actions, private datavacationTypeService: DataVacationTypeService ) {}

  loadVacationTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VacationTypeActions.enterVacationTypes),
      exhaustMap( () => this.datavacationTypeService.getVacationTypes().pipe(
        map( vacationTypes =>  VacationTypeActions.loadVacationTypes({ vacationTypes })),
        catchError( error => of( VacationTypeActions.loadVacationTypesFailure({ error }) )
        )
      ))
    )
  );

}
