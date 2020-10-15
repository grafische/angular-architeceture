import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../../core/model/user';

@Pipe({
  name: 'cardsEmployeeFilter'
})
export class CardsEmployeeFilterPipe implements PipeTransform {

  transform(users: User[], employeeName: string): User[] {
    if (!employeeName) {
      return users;
    }

    return users.filter( user => user.name.toLowerCase().includes(employeeName.toLowerCase()) ||
    user.surname.toLowerCase().includes(employeeName.toLowerCase()));
  }

}
