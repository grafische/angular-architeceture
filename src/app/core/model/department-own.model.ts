import { Vacation } from './vacation.model';

export interface DepartmentOwnYears {
 [prop: number]: Array<Vacation>;
}

export interface DepartmentOwnYearsData {
  years: number;
  data: Vacation[];
 }

export interface DepartmentOwnSummary {
  rok: number;
  prywatne: number;
  sluzbowe: number;
  choroby: number;
  inne: number;
  total: number;
}
