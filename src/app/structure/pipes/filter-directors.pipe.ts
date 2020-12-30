import { Pipe, PipeTransform } from '@angular/core';
import { User, UserFlat } from './../../core/model/user.model';

@Pipe({
  name: 'filterDirectors'
})
export class FilterDirectorsPipe implements PipeTransform {

  transform(value: UserFlat[], level: string): UserFlat[] {
    return value.filter( user => user.level === level );
  }

}
