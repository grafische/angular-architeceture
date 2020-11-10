import { Pipe, PipeTransform } from '@angular/core';
import { User, UserStructure } from './../../core/model/user.model';

@Pipe({
  name: 'filterDirectors'
})
export class FilterDirectorsPipe implements PipeTransform {

  transform(value: UserStructure[], level: string): UserStructure[] {
    return value.filter( user => user.level === level );
  }

}
