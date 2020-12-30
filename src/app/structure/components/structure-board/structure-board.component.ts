import { Message } from '../../../core/enum/message.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { User, UserFlat } from './../../../core/model/user.model';

@Component({
  selector: 'app-structure-board',
  templateUrl: './structure-board.component.html',
  styleUrls: ['./structure-board.component.scss']
})
export class StructureBoardComponent implements OnInit {

  @Input() department: DepartmentUser;
  @Input() users: UserFlat[];
  @Input() boards: UserFlat[];
  structure = Structure;
  users_data: UserFlat;
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
