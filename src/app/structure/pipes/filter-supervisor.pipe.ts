import { UserFlat } from './../../core/model/user.model';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'filterSupervisor'
})
export class FilterSupervisorPipe implements PipeTransform {

  transform(value: UserFlat[], supervisorId: number): UserFlat[] {
    return value.filter( user => user.supervisorId === supervisorId );
  }

}
