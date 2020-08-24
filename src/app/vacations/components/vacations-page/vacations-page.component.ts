import { Department } from './../../../core/model/department.model';
import { Vacation } from './../../../core/model/vacation.model';
import { User } from './../../../core/model/user.model';
import { BottomSheetAlertComponent } from './../../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';

import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
import * as VacationTypeAction from '../../../store/actions/vacation-type.actions';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VacationType } from 'src/app/core/model/vacation-type.model';


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
  vacationType$: Observable<VacationType[]>;
  user$: Observable<User>;
  errorMessage$: Observable<Error>;

  constructor( private store: Store<State>, private _bottomSheet: MatBottomSheet ) {
    this.vacation$ = store.select(SelectorsVacation.selectAllVacation);
    this.department$ = store.select(SelectorsDepartment.selectAllDepartment);
    this.vacationType$ = store.select(SelectorsVacationType.selectAllVacationType);
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
    this.store.dispatch(VacationTypeAction.enterVacationTypes());
  }

  onDelete(vacation: Vacation) {
    this.store.dispatch(VacationAction.deleteVacation({ id: vacation.leaveId }));
  }

}
