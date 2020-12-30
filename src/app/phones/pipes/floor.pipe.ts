import { UserFlat } from './../../core/model/user.model';
import { roomsPositions } from './../../core/const/rooms-positions.const';
import { FloorType } from './../../core/enum/floor-type.enum';
import { User } from 'src/app/core/model/user.model';
import { Pipe, PipeTransform } from '@angular/core';
import { RoomsPositions } from 'src/app/core/model/rooms-positions.model';

@Pipe({
  name: 'floor'
})
export class FloorPipe implements PipeTransform {

  roomsPositions: RoomsPositions[] = roomsPositions;
  floor = FloorType;

  transform(users: UserFlat[], floorType: FloorType): UserFlat[] {

    if(
      floorType == this.floor.GROUND_FLOOR ||
      floorType == this.floor.FIRST_FLOOR ||
      floorType == this.floor.SECOND_FLOOR
      ) {
        users.forEach( user => {
          //Sienkiewicza, Hercena
          const roomPosition = this.roomsPositions.find(room => room.room_name === user.room );
          if(roomPosition) {
            user.floor = roomPosition.floor;
          }
        });

        return users.filter( user => user.floor == floorType.toString())
      }

      if(
        floorType == this.floor.HERCENA ||
        floorType == this.floor.SIENKIEWICZA
        ) {
          return users.filter( user => user.room == floorType.toString())

        }

    return users;
  }

}
