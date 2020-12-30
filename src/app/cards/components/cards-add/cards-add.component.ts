import { User } from './../../../core/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { Department } from './../../../core/model/department.model';
import { FormMode } from '../../../core/enum/form-mode.enum';
import { State } from './../../../store';

@Component({
  selector: 'app-cards-add',
  templateUrl: './cards-add.component.html',
  styleUrls: ['./cards-add.component.scss']
})
export class CardsAddComponent implements OnInit {

  departmentUsers$: Observable<DepartmentUser[]>;
  departmentsType$: Observable<Department[]>;
  departmenSelecttUser$: Observable<User[]>;
  formMode = FormMode;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentUsers$ = this.store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.departmentsType$ = this.store.select(SelectorsDepartment.selectAllDepartment);
    this.departmenSelecttUser$ = this.store.select(SelectorsDepartmentUsers.getDepartmentSelectUsers);
  }

}
