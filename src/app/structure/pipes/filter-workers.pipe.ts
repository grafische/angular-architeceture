import { User, UserFlat } from './../../core/model/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWorkers'
})
export class FilterWorkersPipe implements PipeTransform {

  transform(value: UserFlat[], supervisorId: number): UserFlat[] {
    return value.filter( user => user.supervisorId === supervisorId );
  }

}
