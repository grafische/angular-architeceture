import { DepartmentOwn } from '../../core/model/department-own.model';
import { VacationType } from '../../core/model/vacation-type.model';
import { DepartmentUser } from '../../core/model/department-user.model';
import { Department } from '../../core/model/department.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { tap, filter, first, map, switchMap } from 'rxjs/operators';

import { Vacation } from 'src/app/core/model/vacation.model';

import * as SelectorsDepartmentUsers from '../../store/selectors/department-user.selectors';
import * as SelectorsDepartment from '../../store/selectors/department.selectors';

import * as DepartmentUsersAction from '../../store/actions/department-user.actions';
import * as DepartmentAction from '../../store/actions/department.actions';


@Injectable({ providedIn: 'root' })
export class PreloaderCardsResolver implements Resolve<any> {
  constructor(private store: Store<State>) {}

  departmentUsers$: Observable<DepartmentUser[]>;
  department$: Observable<Department[]>;

  resolve(): Observable<any> {
    this.departmentUsers$ = this.store.pipe(
      select(SelectorsDepartmentUsers.selectAllDepartmentUser),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentUsersAction.enterDepartmentUsers());
        }
      }),
      first()
    );

    this.department$ = this.store.pipe(
      select(SelectorsDepartment.selectAllDepartment),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentAction.enterDepartments());
        }
      }),
      first()
    );

    return forkJoin(
      this.departmentUsers$,
      this.department$
      )
  }
}
