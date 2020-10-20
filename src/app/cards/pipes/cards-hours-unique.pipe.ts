import { Days, RangeDaysWorking } from './../../core/model/days.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { UserWorkingHours } from './../../core/model/user.model';

@Pipe({
  name: 'cardsHoursUnique'
})
export class CardsHoursUniquePipe implements PipeTransform {

  transform(arrHours: UserWorkingHours[]): UserWorkingHours[] {
    // const arrHours: UserWorkingHours[] = value;
    const days = Days;
    const rangeDays: UserWorkingHours[] = [];

    const unique = [
      ...new Set(arrHours.map(workday => workday.startHour)),
      ...new Set(arrHours.map(workday => workday.endHour))];

    if (
      unique.length == 2
      && arrHours.length == 5
      && arrHours[0].dayOfWeek === Object.keys(days)[0]
      && arrHours[4].dayOfWeek === Object.keys(days)[4]
    ) {
      const range: UserWorkingHours = {
        dayOfWeek: RangeDaysWorking.MONDAY_FRIDAY,
        startHour: unique[0],
        endHour: unique[1]
      }

      rangeDays.push(range);
      return rangeDays;
    }
    return arrHours;
  }

}
