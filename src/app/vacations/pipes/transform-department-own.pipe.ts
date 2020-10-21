import { Vacation } from './../../core/model/vacation.model';
import { VacationType } from './../../core/model/vacation-type.model';
import { DepartmentOwnYearsData, DepartmentOwnSummary } from '../../core/model/department-own.model';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transformDepartmentOwn',
  pure: false
})
export class TransformDepartmentOwnPipe implements PipeTransform {

  transform(value: Vacation[], type?: string): Array<DepartmentOwnSummary | DepartmentOwnYearsData> {
    const arrSummary: DepartmentOwnSummary[] = [];
    const arrCurrent: DepartmentOwnYearsData[] = [];

    const arrlistYears: Array<number> = value.map(item => item.years).filter((value, index, self) => self.indexOf(value) === index)

    arrlistYears.forEach(element => {
      const arrListCurrentYears: Vacation[] = value.filter(item => item.years == element);

      arrCurrent.push({
        years: element,
        data: arrListCurrentYears
      });
    });

    if (type == 'summary') {
      arrCurrent.forEach(element => {
        const prywatne: number = element.data.filter(val => val.leaveTypeId == 1).length;
        const sluzbowe: number = element.data.filter(val => val.leaveTypeId == 2).length;
        const choroby: number = element.data.filter(val => val.leaveTypeId == 3).length;
        const inne: number = element.data.filter(val => val.leaveTypeId == 4).length;

        arrSummary.push({
          rok: element.years,
          prywatne: prywatne,
          sluzbowe: sluzbowe,
          choroby: choroby,
          inne: inne,
          total: prywatne + sluzbowe + choroby + inne
        });
      });

      return arrSummary.sort((a, b) => {
        if (a.rok > b.rok) return -1
        return a.rok < b.rok ? 1 : 0
      });
    }

    return arrCurrent.sort((a, b) => {
      if (a.years > b.years) return -1
      return a.years < b.years ? 1 : 0
    });
  }

}

