import { Days } from '../../core/enum/days.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { UserWorkingHours } from './../../core/model/user.model';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'cardsHoursOrder'
})
export class CardsHoursOrderPipe implements PipeTransform {

  transform(arrDaysWrokingHours: UserWorkingHours[]): UserWorkingHours[] {
    const days = Days;
    const newArraywWorkingHours :UserWorkingHours[] = [];
    const arrDays: Array<string> = Object.keys(days);
    const dayCurrent = arrDaysWrokingHours.find((dayWork, idx) => {
      arrDays.forEach((day, idx) => {
        if(dayWork.dayOfWeek === day) {
          newArraywWorkingHours[idx] = dayWork;
        }
      });
    });

    return newArraywWorkingHours;
  }

}
