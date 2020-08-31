import { User } from './user.model';

export interface DepartmentUser {
  employees: User[];
  id: number;
  name: string;
  shortName: string;
  symbol: string;
}

