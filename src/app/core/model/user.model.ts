export interface UserWorkingHours {
  dayOfWeek: string;
  endHour: string;
  id?: number;
  startHour: string;
}

export interface CurrentLeave {
  endDate: Date;
  leaveTypeId: number;
  leaveTypeName: string;
  startDate: Date;
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
  name: string;
  nameday: Date;
  nickname: string;
  mobilePhoneNumber: string;
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
  floor?: string;
  currentLeave: CurrentLeave | null;
  departmentSymbol: string;
}

export interface UserFlat {
  id: number;
  name: string;
  surname: string;
  login: string;
  position: string;
  level: string;
  room: string;
  departmentName: string;
  supervisorId: number;
  departmentSymbol: string;
  currentLeave: CurrentLeave | null;
  mobilePhoneNumber: string;
  phoneNumber: string;
  floor?: string;
}
