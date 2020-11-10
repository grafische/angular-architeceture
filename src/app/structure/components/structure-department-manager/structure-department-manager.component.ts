import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { Message } from './../../../core/model/message.enum';
import { UserStructure } from './../../../core/model/user.model';
import { State } from './../../../store';



@Component({
  selector: 'app-structure-department-manager',
  templateUrl: './structure-department-manager.component.html',
  styleUrls: ['./structure-department-manager.component.scss']
})
export class StructureDepartmentManagerComponent implements OnInit {

  @Input() supervisorId: number;
  @Input() users: UserStructure[];
  structure = Structure;
  departmentManagerDepartmentUser$: Observable<DepartmentUser[]>;
  users_data: UserStructure;
  message = Message;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmentManagerDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentLevel, { idLevel: this.structure[this.structure.DEPARTMENT_MANAGER], supervisorId: this.supervisorId });
  }

}
