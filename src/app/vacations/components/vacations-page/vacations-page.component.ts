import { TypeMessage } from './../../../core/model/bottom-message.model';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { Department } from './../../../core/model/department.model';
import { Vacation } from './../../../core/model/vacation.model';
import { User } from './../../../core/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';
import * as SelectorsUser from '../../../store/selectors/auth.selectors';

import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
import * as DepartmentUsersAction from '../../../store/actions/department-user.actions';
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
  departmentUsers$: Observable<DepartmentUser[]>;
  vacationType$: Observable<VacationType[]>;
  user$: Observable<User>;

  constructor( private store: Store<State> ) {
    this.vacation$ = store.select(SelectorsVacation.selectAllVacation);
    this.department$ = store.select(SelectorsDepartment.selectAllDepartment);
    this.departmentUsers$ = store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.vacationType$ = store.select(SelectorsVacationType.selectAllVacationType);
    this.user$ = store.select(SelectorsUser.selectAuthUser);
  }

  ngOnInit(): void {
    // this.store.dispatch(VacationAction.enterVacations());
    // this.store.dispatch(DepartmentAction.enterDepartments());
    // this.store.dispatch(DepartmentUsersAction.enterDepartmentUsers());
    // this.store.dispatch(VacationTypeAction.enterVacationTypes());
  }

  onDelete(vacation: Vacation) {
    this.store.dispatch(VacationAction.deleteVacation({ id: vacation.leaveId }));
  }

}
