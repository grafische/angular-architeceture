import { Component, Input, OnInit } from '@angular/core';
import { Message } from './../../../core/model/message.enum';
import { UserStructure } from './../../../core/model/user.model';

@Component({
  selector: 'app-structure-worker-sub',
  templateUrl: './structure-worker-sub.component.html',
  styleUrls: ['./structure-worker-sub.component.scss']
})
export class StructureWorkerSubComponent implements OnInit {

  @Input() supervisorId: number;
  @Input() users: UserStructure[];
  users_data: UserStructure;
  message = Message;

  constructor() { }

  ngOnInit(): void {
  }

}
