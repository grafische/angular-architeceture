export interface Vacation {
  leaveId: number | null;
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
  kindAC?: string;
}
