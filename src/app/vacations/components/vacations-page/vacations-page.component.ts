import { Vacation } from './../../../core/model/vacation.model';
import { BottomSheetAlertComponent } from './../../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as VacationAction from '../../../store/actions/vacation.actions';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-vacations-page',
  templateUrl: './vacations-page.component.html',
  styleUrls: ['./vacations-page.component.scss']
})
export class VacationsPageComponent implements OnInit {

  vacation$: Observable<Vacation[]>;
  vacationId$: Observable<string[] | number[] >;
  vacationE$: Observable<any>;
  errorMessage$: Observable<Error>;

  constructor( private store: Store<State>, private _bottomSheet: MatBottomSheet ) {
    this.vacation$ = store.select(SelectorsVacation.selectAllVacation);
    this.errorMessage$ = store.select(SelectorsVacation.getErrorVacation).pipe(
      tap(
        val => {
          if( val != null ) {  this._bottomSheet.open(BottomSheetAlertComponent, {
            data: { message: val.message },
            panelClass: "alert-error"
          });
          }
        }
      )
    );
   }

  ngOnInit(): void {
    this.store.dispatch(VacationAction.enterVacations());
  }

}
