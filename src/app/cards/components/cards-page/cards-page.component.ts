import { CardsDepartmentComponent } from './../cards-department/cards-department.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Department } from './../../../core/model/department.model';
import { DepartmentUser } from './../../../core/model/department-user.model';

import { State } from './../../../store';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {

  departmentUsers$: Observable<DepartmentUser[]>;
  departmentUser$: Observable<DepartmentUser[]>;
  department$: Observable<Department[]>;
  searchField: string;
  department: string;
  @ViewChild(CardsDepartmentComponent) child: CardsDepartmentComponent;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentUsers$ = this.store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.departmentUser$ = this.store.select(SelectorsDepartmentUsers.selectOneDepartmentUser, {id: 2});
    this.department$ = this.store.select(SelectorsDepartment.selectAllDepartment);
  }

}
