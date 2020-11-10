import { User } from './../../../core/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { State } from './../../../store';

type LogLevelStrings = keyof typeof Structure;

@Component({
  selector: 'app-structure-page',
  templateUrl: './structure-page.component.html',
  styleUrls: ['./structure-page.component.scss']
})
export class StructurePageComponent implements OnInit {

  structure = Structure;
  struct: LogLevelStrings;
  departmentUsers$: Observable<DepartmentUser[]>;
  departmentUser$: Observable<DepartmentUser[]>;
  departmenSelecttUser$: Observable<User[]>;
  boardDepartmentUser$: Observable<DepartmentUser[]>;
  directorDepartmentUser$: Observable<DepartmentUser[]>;
  treeDepartmentUser$: Observable<any>;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentUsers$ = this.store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.departmentUser$ = this.store.select(SelectorsDepartmentUsers.selectOneDepartmentUser, { id: 2 });
    this.treeDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.treeDepartmentLevel);
    this.boardDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentLevel, {idLevel: this.structure[this.structure.BOARD], supervisorId: null });
    this.directorDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentLevel, {idLevel: this.structure[this.structure.DIRECTOR], supervisorId: null });
    this.departmenSelecttUser$= this.store.select(SelectorsDepartmentUsers.getDepartmentSelectUsers);
  }

  nameKeyStructure(keyStructure) {
    Object.keys(this.structure).find(key => this.structure[key] === keyStructure)
  }

}
