import { Pipe, PipeTransform } from '@angular/core';
import { User, UserFlat } from './../../core/model/user.model';

@Pipe({
  name: 'flatUser'
})
export class FlatUserPipe implements PipeTransform {

  transform(value: User[]): UserFlat[] {
    return value.map( user => {
      const userFlat: UserFlat = (
      {
        id: user.id,
        name: user.name,
        surname: user.surname,
        login: user.login,
        position: user.position,
        room: user.room,
        level: user.level,
        supervisorId: user.supervisorId,
        departmentName: user.departmentName,
        departmentSymbol: user.departmentSymbol,
        currentLeave: user.currentLeave,
        phoneNumber: user.phoneNumber,
        mobilePhoneNumber: user.mobilePhoneNumber,
       });

       return userFlat;
      });
  }

}
