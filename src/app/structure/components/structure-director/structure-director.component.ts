import { Message } from './../../../core/model/message.enum';
import { User, UserStructure } from './../../../core/model/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { State } from './../../../store';

@Component({
  selector: 'app-structure-director',
  templateUrl: './structure-director.component.html',
  styleUrls: ['./structure-director.component.scss']
})
export class StructureDirectorComponent implements OnInit {

  @Input() department: DepartmentUser;
  @Input() users: UserStructure[];
  @Input() directors: UserStructure[];
  structure = Structure;
  message = Message;
  directorDepartmentUser$: Observable<DepartmentUser[]>;
  users_data: UserStructure;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    // this.directorDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentLevel, { idLevel: this.structure[this.structure.DEPARTMENT_MANAGER], supervisorId: null });
  }

}
