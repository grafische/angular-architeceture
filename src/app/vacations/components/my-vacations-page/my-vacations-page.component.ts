import { VacationType } from './../../../core/model/vacation-type.model';
import { DepartmentOwn, DepartmentOwnYears, DepartmentOwnItem, DepartmentOwnYearsData } from './../../../core/model/department-own.model';
import { Component, OnInit } from '@angular/core';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsDepartmentOwn from '../../../store/selectors/department-own.selectors';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';
import * as SelectorsUser from '../../../store/selectors/auth.selectors';

import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentOwnAction from '../../../store/actions/department-own.actions';
import * as DepartmentUsersAction from '../../../store/actions/department-user.actions';
import * as VacationTypeAction from '../../../store/actions/vacation-type.actions';
import { Store } from '@ngrx/store';
import { Observable, of, combineLatest } from 'rxjs';
import { map, tap, first, concatMap, mergeMap, withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-my-vacations-page',
  templateUrl: './my-vacations-page.component.html',
  styleUrls: ['./my-vacations-page.component.scss']
})
export class MyVacationsPageComponent implements OnInit {

  departmentOwn$: Observable<DepartmentOwn[]>;
  vacationType$: Observable<VacationType[]>;
  displayedColumnsSummary: string[] = ['rok', 'prywatne', 'sluzbowe', 'choroby', 'inne', 'total'];
  displayedColumnsYears: string[] = ['details'];

  constructor( private store: Store<State> ) {
    this.vacationType$ = store.select(SelectorsVacationType.selectAllVacationType);
    this.departmentOwn$ = store.select(SelectorsDepartmentOwn.selectAllDepartmentOwn);
  }

  ngOnInit(): void {

  }

}
