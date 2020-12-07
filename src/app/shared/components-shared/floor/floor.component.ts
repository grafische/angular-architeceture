import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { countRoom, roomsPositions } from './../../../core/const/rooms-positions.const';
import { RoomType } from './../../../core/enum/room-type.enum';
import { RoomsCounting } from './../../../core/model/rooms-positions.model';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit, OnChanges {

  @Input() room: string;
  @Input() roomType: RoomType;
  roomsType = RoomType;
  roomsPositions = roomsPositions;
  roomsCounting: RoomsCounting[] = countRoom;
  roomsClass: Array<string> = ['floor-plan'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.RoomType?.currentValue === this.roomsType.MIDDLE) {
      this.roomsClass.push('floor-plan--middle');
    }

    if (changes.RoomType?.currentValue === this.roomsType.SMALL) {
      this.roomsClass.push('floor-plan--small');
    }
  }

  get roomDetails() {
    if (this.room)
      return this.roomsPositions.filter(room => room.room_name === this.room)[0];
  }

  get positionX() {
    if (this.roomType === this.roomsType.MIDDLE)
      return this.roomDetails.position_x - (this.roomDetails.position_x * (this.roomsCounting[this.roomsType.MIDDLE].left / 100));

    if (this.roomType === this.roomsType.SMALL)
      return this.roomDetails.position_x - (this.roomDetails.position_x * (this.roomsCounting[this.roomsType.SMALL].left / 100));
  }

  get positionY() {
    if (this.roomType === this.roomsType.MIDDLE)
      return this.roomDetails.position_y - (this.roomDetails.position_y * (this.roomsCounting[this.roomsType.MIDDLE].top / 100));

    if (this.roomType === this.roomsType.SMALL)
      return this.roomDetails.position_y - (this.roomDetails.position_y * (this.roomsCounting[this.roomsType.SMALL].top / 100));
  }

}
