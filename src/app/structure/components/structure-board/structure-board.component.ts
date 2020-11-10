import { Message } from './../../../core/model/message.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Structure } from './../../../core/enum/structure.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { User, UserStructure } from './../../../core/model/user.model';

@Component({
  selector: 'app-structure-board',
  templateUrl: './structure-board.component.html',
  styleUrls: ['./structure-board.component.scss']
})
export class StructureBoardComponent implements OnInit {

  @Input() department: DepartmentUser;
  @Input() users: UserStructure[];
  @Input() boards: UserStructure[];
  structure = Structure;
  users_data: UserStructure;
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
