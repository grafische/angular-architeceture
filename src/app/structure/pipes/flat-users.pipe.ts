import { User, UserStructure } from './../../core/model/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatUsers'
})
export class FlatUsersPipe implements PipeTransform {

  transform(value: User[], level: string): UserStructure[] {
    return value.map( user => {
      const userFlat: UserStructure = (
      {
        id: user.id,
        name: user.name,
        surname: user.surname,
        login: user.login,
        position: user.position,
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
