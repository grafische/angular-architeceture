export interface DepartmentOwn {
  contact: string;
  departmentId: number;
  departmentName: string;
  employeeId: number;
  employeeLogin: string;
  employeeName: string;
  endDate: Date;
  leaveId: number;
  leaveTypeId: number;
  remarks: string;
  startDate: Date;
  years?: number;
}


export interface DepartmentOwnItem {
  contact: string;
  departmentId: number;
  departmentName: string;
  employeeId: number;
  employeeLogin: string;
  employeeName: string;
  endDate: Date;
  leaveId: number;
  leaveTypeId: number;
  remarks: string;
  startDate: Date;
  years?: number;
}

export interface DepartmentOwnYears {
 [prop: number]: Array<DepartmentOwnItem>;
}

export interface DepartmentOwnYearsData {
  years: number;
  data: DepartmentOwnItem[];
 }

export interface DepartmentOwnSummary {
  rok: number;
  prywatne: number;
  sluzbowe: number;
  choroby: number;
  inne: number;
  total: number;
}
