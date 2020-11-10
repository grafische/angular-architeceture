import { Message } from './../../../core/model/message.enum';
import { Component, Input, OnInit } from '@angular/core';
import { UserStructure } from './../../../core/model/user.model';

@Component({
  selector: 'app-structure-vice-director',
  templateUrl: './structure-vice-director.component.html',
  styleUrls: ['./structure-vice-director.component.scss']
})
export class StructureViceDirectorComponent implements OnInit {

  @Input() supervisorId: number;
  @Input() users: UserStructure[];
  users_data: UserStructure;
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
