import { DepartmentOwn } from './../../core/model/department-own.model';
import { VacationType } from './../../core/model/vacation-type.model';
import { DepartmentUser } from './../../core/model/department-user.model';
import { Department } from './../../core/model/department.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from './../../store';
import { tap, filter, first, map, switchMap } from 'rxjs/operators';

import { Vacation } from 'src/app/core/model/vacation.model';

import * as SelectorsVacation from './../../store/selectors/vacation.selectors';
import * as SelectorsDepartment from './../../store/selectors/department.selectors';
import * as SelectorsDepartmentUsers from './../../store/selectors/department-user.selectors';
import * as SelectorsVacationType from './../../store/selectors/vacation-type.selectors';
import * as SelectorsDepartmentOwns from './../../store/selectors/department-own.selectors';

import * as VacationAction from './../../store/actions/vacation.actions';
import * as DepartmentAction from './../../store/actions/department.actions';
import * as DepartmentUsersAction from './../../store/actions/department-user.actions';
import * as VacationTypeAction from './../../store/actions/vacation-type.actions';
import * as DepartmentOwnsAction from './../../store/actions/department-own.actions';


@Injectable({ providedIn: 'root' })
export class PreloaderResolver implements Resolve<any> {
  constructor(private store: Store<State>) {}

  vacation$: Observable<Vacation[]>;
  department$: Observable<Department[]>;
  departmentUsers$: Observable<DepartmentUser[]>;
  departmentOwns$: Observable<DepartmentOwn[]>;
  vacationType$: Observable<VacationType[]>;

  resolve(): Observable<any> {
    this.vacation$ = this.store.pipe(
      select(SelectorsVacation.selectAllVacation),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(VacationAction.enterVacations());
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

    this.departmentUsers$ = this.store.pipe(
      select(SelectorsDepartmentUsers.selectAllDepartmentUser),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentUsersAction.enterDepartmentUsers());
        }
      }),
      first()
    );

    this.departmentOwns$ = this.store.pipe(
      select(SelectorsDepartmentOwns.selectAllDepartmentOwn),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(DepartmentOwnsAction.enterDepartmentOwns());
        }
      }),
      first()
    );

    this.vacationType$ = this.store.pipe(
      select(SelectorsVacationType.selectAllVacationType),
      tap(loaded => {
        if (loaded.length == 0) {
          this.store.dispatch(VacationTypeAction.enterVacationTypes());
        }
      }),
      first()
    );

    return forkJoin(
      this.vacation$,
      this.department$,
      this.departmentUsers$,
      this.departmentOwns$,
      this.vacationType$
      )

    // return this.store.pipe(
    //   select(SelectorsVacation.selectAllVacation),
    //   tap(loaded => {
    //     if (loaded.length == 0) {
    //       console.info(loaded.length);
    //       console.info("loaded.length");
    //       this.store.dispatch(VacationTypeAction.enterVacationTypes());
    //     }
    //   }),
    //   first()
    //   );
  }
}
