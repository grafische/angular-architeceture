import { VacationType } from './../../../core/model/vacation-type.model';
import { Department } from './../../../core/model/department.model';
import { DepartmentVacationsLeave, DepartmentVacations } from './../../../core/model/department-vacations.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from './../../../store';
import * as SelectorsDepartmentVacations from '../../../store/selectors/department-vacations.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';

import * as DepartmentVacationsAction from '../../../store/actions/department-vacations.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-vacations-full',
  templateUrl: './vacations-full.component.html',
  styleUrls: ['./vacations-full.component.scss']
})
export class VacationsFullComponent implements OnInit {

  departmentVacations$: Observable<DepartmentVacations[]>;
  department$: Observable<Department[]>;
  vacationType$: Observable<VacationType[]>;

  constructor( private store: Store<State> ) {
    this.department$ = store.select(SelectorsDepartment.selectAllDepartment);
    this.vacationType$ = this.store.select(SelectorsVacationType.selectAllVacationType);
  }

  ngOnInit(): void {
  }

  setDepartmentLeaves(ev: MatSelectChange) {
    return this.store.dispatch(DepartmentVacationsAction.enterDepartmentVacations({ id: ev.value }));
  }

  getDepartmentLeaves() {
    return this.departmentVacations$ = this.store.select(SelectorsDepartmentVacations.selectAllDepartmentVacations);
  }

}
