import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SmapleActions from '../actions/smaple.actions';



@Injectable()
export class SmapleEffects {

  loadSmaples$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SmapleActions.loadSmaples),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SmapleActions.loadSmaplesSuccess({ data })),
          catchError(error => of(SmapleActions.loadSmaplesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
