import { UserFlat } from './../../../core/model/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { User } from './../../../core/model/user';
import { State } from './../../../store';
import { Message } from '../../../core/enum/message.enum';

@Component({
  selector: 'app-structure-worker',
  templateUrl: './structure-worker.component.html',
  styleUrls: ['./structure-worker.component.scss']
})
export class StructureWorkerComponent implements OnInit {

  @Input() supervisorId: number;
  @Input() users: UserFlat[];
  structure = Structure;
  users_data: UserFlat;
  workerDepartmentUser$: Observable<DepartmentUser[]>;
  message = Message;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    // this.workerDepartmentUser$ = this.store.select(SelectorsDepartmentUsers.selectDepartmentLevel, { idLevel: this.structure[this.structure.WORKER], supervisorId: this.supervisorId });
  }

}
