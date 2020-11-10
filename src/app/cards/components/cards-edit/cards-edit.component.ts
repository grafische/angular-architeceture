import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DepartmentUser } from 'src/app/core/model/department-user.model';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import { Department } from './../../../core/model/department.model';
import { User } from './../../../core/model/user.model';
import { State } from './../../../store';

@Component({
  selector: 'app-cards-edit',
  templateUrl: './cards-edit.component.html',
  styleUrls: ['./cards-edit.component.scss']
})
export class CardsEditComponent implements OnInit {

  departmentsType$: Observable<Department[]>;
  departmentEmployee$: Observable<DepartmentUser>;
  departmenSelecttUser$: Observable<User[]>;
  employee$: Observable<User>;
  route$: Observable<any>;

  constructor(
    private store: Store<State>
    ) {}

  ngOnInit() {
    this.departmentsType$ = this.store.select(SelectorsDepartment.selectAllDepartment);
    this.departmentEmployee$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentEmployeeDepartmentUser);
    this.employee$ = this.store.select(SelectorsDepartmentUsers.selectDetailsEmployeeDepartmentUser);
    this.departmenSelecttUser$ = this.store.select(SelectorsDepartmentUsers.getDepartmentSelectUsers);
  }


}
