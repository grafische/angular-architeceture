import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Vacation } from 'src/app/core/model/vacation.model';
import { DepartmentUser } from '../../core/model/department-user.model';
import { Department } from '../../core/model/department.model';
import { VacationType } from '../../core/model/vacation-type.model';
import { State } from '../../store';
import * as DepartmentOwnsAction from './../../store/actions/department-own.actions';
import * as DepartmentUsersAction from './../../store/actions/department-user.actions';
import * as DepartmentAction from './../../store/actions/department.actions';
import * as VacationTypeAction from './../../store/actions/vacation-type.actions';
import * as VacationAction from './../../store/actions/vacation.actions';
import * as SelectorsDepartmentOwns from './../../store/selectors/department-own.selectors';
import * as SelectorsDepartmentUsers from './../../store/selectors/department-user.selectors';
import * as SelectorsDepartment from './../../store/selectors/department.selectors';
import * as SelectorsVacationType from './../../store/selectors/vacation-type.selectors';
import * as SelectorsVacation from './../../store/selectors/vacation.selectors';

@Injectable({ providedIn: 'root' })
export class PreloaderStructureResolver implements Resolve<any> {
  constructor(private store: Store<State>) {}

  department$: Observable<Department[]>;
  departmentUsers$: Observable<DepartmentUser[]>;

  resolve(): Observable<any> {

    this.department$ = this.store.pipe(
      select(SelectorsDepartment.selectAllDepartment),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentAction.enterDepartments());
        }
      }),
      first()
    );

    this.departmentUsers$ = this.store.pipe(
      select(SelectorsDepartmentUsers.selectAllDepartmentUser),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentUsersAction.enterDepartmentUsers());
        }
      }),
      first()
    );


    return forkJoin(
      this.department$,
      this.departmentUsers$
      )
  }
}
