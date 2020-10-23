import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Department } from './../../../core/model/department.model';
import { DepartmentUser } from './../../../core/model/department-user.model';

import { State } from './../../../store';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';
import * as SelectorsUser from '../../../store/selectors/auth.selectors';

import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
import * as DepartmentUsersAction from '../../../store/actions/department-user.actions';
import * as VacationTypeAction from '../../../store/actions/vacation-type.actions';


@Component({
  selector: 'app-<%= dasherize(name) %>-page',
  templateUrl: './<%= dasherize(name) %>-page.component.html',
  styleUrls: ['./<%= dasherize(name) %>-page.component.scss']
})
export class <%= classify(name) %>PageComponent implements OnInit {

  departmentUsers$: Observable<DepartmentUser[]>;
  departmentUser$: Observable<DepartmentUser[]>;
  department$: Observable<Department[]>;
  vacation$: Observable<Vacation[]>;
  vacationId$: Observable<string[] | number[] >;
  vacationE$: Observable<any>;
  vacationType$: Observable<VacationType[]>;
  user$: Observable<User>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentUsers$ = this.store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.departmentUser$ = this.store.select(SelectorsDepartmentUsers.selectOneDepartmentUser, {id: 2});
    this.department$ = this.store.select(SelectorsDepartment.selectAllDepartment);
    this.vacation$ = store.select(SelectorsVacation.selectAllVacation);
    this.vacationType$ = store.select(SelectorsVacationType.selectAllVacationType);
    this.user$ = store.select(SelectorsUser.selectAuthUser);
  }

}
