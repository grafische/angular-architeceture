import { Vacation } from 'src/app/core/model/vacation.model';
import { Update } from '@ngrx/entity';
import { Message } from '../../core/enum/message.enum';
import { TypeMessage } from './../../core/model/bottom-message.model';
import { BottomSheetAlertComponent } from './../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of, zip } from 'rxjs';
import { exhaustMap, map, catchError, tap, mergeMap, withLatestFrom, filter, concatMap, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { State } from './../../store';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { DataVacationService } from './../services/data-vacation.service';

import * as VacationActions from '../actions/vacation.actions';
import * as DepartmentOwnAction from '../actions/department-own.actions';

import * as SelectorsVacation from './../../store/selectors/vacation.selectors';
import * as SelectorsDepartmentOwn from './../../store/selectors/department-own.selectors';

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
        map( vacations =>  VacationActions.loadVacations({ vacations })),
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
           const currentDate: Date = new Date();
           if(vacation) {
             const current = (new Date(vacation.startDate).getTime() <= currentDate.getTime() && new Date(vacation.endDate).getTime() >= new Date(vacation.endDate).getTime())? 'aktualny' : 'planowany';
             vacation.kindAC = current;
             vacation.years = new Date(vacation.startDate).getFullYear();
            }
            return vacation;
          } ),
          mergeMap( vacation => [DepartmentOwnAction.addDepartmentOwn({ vacation }), VacationActions.addVacationSuccess( { vacation } )]),
          catchError( error => {
          return of( VacationActions.addVacationFailure({ error }) )
        }),
      )),
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


