import { RoomType } from './../../../core/enum/room-type.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../core/enum/message.enum';
import { UserFlat } from './../../../core/model/user.model';

@Component({
  selector: 'app-link-worker-tooltip',
  templateUrl: './link-worker-tooltip.component.html',
  styleUrls: ['./link-worker-tooltip.component.scss']
})
export class LinkWorkerTooltipComponent implements OnInit {

  @Input() worker: UserFlat;
  message = Message;
  roomType = RoomType;

  constructor() { }

  ngOnInit(): void {
  }

}
