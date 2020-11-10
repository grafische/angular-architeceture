import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../../core/model/user.model';

@Pipe({
  name: 'departmentUsers'
})
export class DepartmentUsersPipe implements PipeTransform {

  transform(value: User[], departmentCategoryId: number): User[] {
    return value.filter( user => user.departmentId === departmentCategoryId );
  }

}
