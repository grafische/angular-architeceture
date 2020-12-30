import { Message } from '../../../core/enum/message.enum';
import { Component, Input, OnInit } from '@angular/core';
import { UserFlat } from './../../../core/model/user.model';

@Component({
  selector: 'app-structure-vice-director',
  templateUrl: './structure-vice-director.component.html',
  styleUrls: ['./structure-vice-director.component.scss']
})
export class StructureViceDirectorComponent implements OnInit {

  @Input() supervisorId: number;
  @Input() users: UserFlat[];
  users_data: UserFlat;
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
