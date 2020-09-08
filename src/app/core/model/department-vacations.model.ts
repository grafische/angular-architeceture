export interface DepartmentVacationsLeave {
  endDate: Date;
  leaveTypeId: number;
  leaveTypeName: string;
  startDate: Date;
}

export interface DepartmentVacations {
    fullName: string;
    leaves: Array<DepartmentVacationsLeave>;
    login: string;
    position: string;
}
