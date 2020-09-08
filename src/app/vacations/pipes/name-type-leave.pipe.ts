import { Pipe, PipeTransform } from '@angular/core';

import { VacationType } from './../../core/model/vacation-type.model';

@Pipe({
  name: 'nameTypeLeave'
})
export class NameTypeLeavePipe implements PipeTransform {

  transform(value: number, typeLeave: VacationType[]): string {
    if(value) return typeLeave.filter(item => item.id == value)[0]?.name;
  }

}
