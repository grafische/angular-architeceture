import { Message } from './../../core/model/message.enum';
import { TypeMessage } from './../../core/model/bottom-message.model';
import { BottomSheetAlertComponent } from './../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap, mergeMap, withLatestFrom, filter, concatMap } from 'rxjs/operators';

import { DataVacationService } from './../services/data-vacation.service';
import * as VacationActions from '../actions/vacation.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from './../../store';
import * as SelectorsVacation from './../../store/selectors/vacation.selectors';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable()
export class VacationEffects {

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private dataVacationService: DataVacationService,
    private _bottomSheet: MatBottomSheet
     ) {}

  loadVacations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VacationActions.enterVacations),
      // withLatestFrom(this.store.pipe(select(SelectorsVacation.selectAllVacation))),
      // filter(([action, latestVacation]) => {
      //   if( latestVacation.length > 0 ) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }),
      exhaustMap( () => this.dataVacationService.getVacations().pipe(
        map( vacations =>  VacationActions.addVacations({ vacations })),
        catchError( error => of( VacationActions.loadVacationsFailure({ error }) )
        )
      ))
    )
  );

  deleteVacation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VacationActions.deleteVacation),
      mergeMap( action => this.dataVacationService.delete(action.id).pipe(
        map( val => VacationActions.deletedVacation({ id: action.id}) ),
        catchError( error => of( VacationActions.loadVacationsFailure({ error }) ))
      ))
    )
  );

  addVacation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VacationActions.addVacation),
      concatMap( action => this.dataVacationService.create(action.vacation).pipe(
         map( vacation => {
           if(vacation) {
            this.bottomSheetSucces( Message.FormSuccess );
           }
          return VacationActions.addVacationSuccess( { vacation } )
          } ),
        catchError( error => {
          this.bottomSheetError( Message.FormError );
          return of( VacationActions.addVacationFailure({ error }) )
        })
      ))
    )
  );

  bottomSheetSucces( _message: Message ): void {
    this._bottomSheet.open(BottomSheetAlertComponent, {
      data: {
        type: TypeMessage.Success,
        message: _message },
      panelClass: "alert-succes"
    });
  }

  bottomSheetError( _message: Message ): void {
    this._bottomSheet.open(BottomSheetAlertComponent, {
      data: {
        type: TypeMessage.Error,
        message: _message },
      panelClass: "alert-error"
    });
  }

}


