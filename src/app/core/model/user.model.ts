export interface UserWorkingHours {
  dayOfWeek: string;
  endHour: string;
  id?: number;
  startHour: string;
}

export interface User {
  birtday: Date;
  communicatorNumber: string;
  departmentId: 0;
  departmentName: string;
  email: string;
  extensionNumber: string;
  former: true;
  id: number;
  level: string;
  login: string;
  mobilePhoneNumber: string;
  name: string;
  nameday: Date;
  nickname: string;
  phoneNumber: string;
  photoUrl: string;
  position: string;
  workingHours: Array<UserWorkingHours>;
  roles: Array<string>;
  room: string;
  supervisorId: 0;
  supervisorName: string;
  surname: string;
  wwwAddress: string;
  authToken?: string;
}
