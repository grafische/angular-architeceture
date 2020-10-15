import { createSelector } from '@ngrx/store';
import * as fromDepartmentUser from '../reducers/department-user.reducer';
import { State } from './../';
import * as selectorsRoute from './route.selectors';


export interface DepartmentId {
  id: number;
}

export const selectDepartmentUsersState = (state: State) => state.departmentUsers;
export const selectDepartmentUsersEntityState = (state: State) => state.departmentUsers.entities;
export const getSelectDepartmentUserId = (state: State) => state.departmentUsers.ids;

export const selectAllDepartmentUser = createSelector(
  selectDepartmentUsersState,
  fromDepartmentUser.selectAll
);

export const selectDepartmentUserId = createSelector(
  selectDepartmentUsersState,
  fromDepartmentUser.selectIds
);

export const selectDepartmentUserEntities = createSelector(
  selectDepartmentUsersState,
  fromDepartmentUser.selectEntities
);

export const selectCardDepartmentUser = createSelector(
  selectAllDepartmentUser,
  selectorsRoute.selectSelectedCardDepartment,
  (departments, paramDepartment) => departments.filter(department => department.symbol === paramDepartment)[0]
);

export const selectDetailsEmployeeDepartmentUser = createSelector(
  selectAllDepartmentUser,
  selectorsRoute.selectSelectedCardLoginEmloyee,
  (departments, paramLogin) => {
    const departmentGroupEmployees = departments.filter(department => department.employees.some( employee => employee.login === paramLogin ))[0];

    return departmentGroupEmployees?.employees?.filter( employee => employee.login === paramLogin )[0];
  }
);

export const selectDepartmentEmployeeDepartmentUser = createSelector(
  selectAllDepartmentUser,
  selectorsRoute.selectSelectedCardLoginEmloyee,
  (departments, paramLogin) => {
    return departments.filter(department => department.employees.some( employee => employee.login === paramLogin ))[0];
  }
);

export const selectOneDepartmentUser = createSelector(
  selectDepartmentUserEntities,
  (departmentUser, { id }) => {
    return departmentUser[id];
  }
);

export const selectEmployeeDepartmentUser = createSelector(
  selectCardDepartmentUser,
  selectorsRoute.selectSelectedCardLoginEmloyee,
  (card, paramEmployee) => {
    return card?.employees.filter(val => val.login === paramEmployee)[0];
  }
);

export const selectEmployeeRoomPhoneDepartmentUsers = createSelector(
  selectCardDepartmentUser,
  selectEmployeeDepartmentUser,
  (card, employee) => {
    return card?.employees.filter(
      employeeRoom => employeeRoom.room === employee.room
        && employeeRoom.phoneNumber != null
        && employeeRoom.login !== employee.login);
  }
);

export const getErrorDepartmentUser = createSelector(
  selectDepartmentUsersState,
  state => state.error
);

