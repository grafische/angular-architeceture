import { SmapleService } from './../../smaple.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SmapleActions from '../actions/smaple.actions';



@Injectable()
export class SmapleEffects {

  loadSmaples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SmapleActions.enter),
      mergeMap( (av) => this.smapleSv.getOneUser().pipe(
        map( (smaple)  => SmapleActions.addSmaple( { smaple }))
      ))
    );
  });

  constructor(private actions$: Actions, private smapleSv: SmapleService ) {}

}
