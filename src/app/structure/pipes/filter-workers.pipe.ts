import { User, UserStructure } from './../../core/model/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWorkers'
})
export class FilterWorkersPipe implements PipeTransform {

  transform(value: UserStructure[], supervisorId: number): UserStructure[] {
    return value.filter( user => user.supervisorId === supervisorId );
  }

}
