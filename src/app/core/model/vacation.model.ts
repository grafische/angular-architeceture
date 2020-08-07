export interface Vacation {
  employeeId: number | null;
  employeeName: string;
  employeeLogin: string;
  leaveTypeId: number | null;
  startDate: Date;
  endDate: Date;
  contact: string;
  remarks: string | null;
  departmentId: number;
  departmentName: string;
}
