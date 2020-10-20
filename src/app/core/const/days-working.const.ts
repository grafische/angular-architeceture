import { UserWorkingHours } from './../model/user.model';

export const daysWorking: UserWorkingHours[]  = [
  {
    dayOfWeek: "FRIDAY",
    startHour: "08:30",
    endHour: "16:30"
  },
  {
    dayOfWeek: "THURSDAY",
    startHour: "08:30",
    endHour: "16:30"
  },
  {
    dayOfWeek: "WEDNESDAY",
    startHour: "08:30",
    endHour: "16:30"
  },
  {
    dayOfWeek: "TUESDAY",
    startHour: "08:30",
    endHour: "16:30"
  },
  {
    dayOfWeek: "MONDAY",
    startHour: "08:30",
    endHour: "16:30"
  }
];

export const rangeDaysWorking:string = "MONDAY-FRIDAY";
