import { Department } from './../../../core/model/department.model';
import { Vacation } from './../../../core/model/vacation.model';
import { BottomSheetAlertComponent } from './../../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
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
  department$: Observable<Department[]>;
  errorMessage$: Observable<Error>;

  constructor( private store: Store<State>, private _bottomSheet: MatBottomSheet ) {
    this.vacation$ = store.select(SelectorsVacation.selectAllVacation);
    this.department$ = store.select(SelectorsDepartment.selectAllDepartment);
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
    this.store.dispatch(DepartmentAction.enterDepartments());
  }

}
