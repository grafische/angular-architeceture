import { DepartmentUser } from './../../core/model/department-user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardsFilter'
})
export class CardsFilterPipe implements PipeTransform {

  transform(departmentsAll: DepartmentUser[], departmentName: string, employeeName: string): DepartmentUser[] {
    if (!departmentsAll) {
      return null;
    }

    if (!departmentName && !employeeName) {
      return departmentsAll;
    }

    if (departmentName && !employeeName) {
      return departmentsAll.filter(department => department.name === departmentName);
    }

    if (!departmentName && employeeName) {
      return departmentsAll.filter(department => {
        return department.employees.some( val => val.name.toLowerCase().includes(employeeName.toLowerCase()) ||
        val.surname.toLowerCase().includes(employeeName.toLowerCase()))
      });
    }

    if (departmentName && employeeName) {
      return departmentsAll.filter(
        department => department.name.toLowerCase().includes(departmentName.toLowerCase())
          && department.employees.some( val => val.name.toLowerCase().includes(employeeName.toLowerCase()) ||
          val.surname.toLowerCase().includes(employeeName.toLowerCase()))
      );
    }
  }
}
