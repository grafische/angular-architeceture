import { User } from './../../core/model/user.model';
import { createSelector } from '@ngrx/store';
import * as fromDepartmentUser from '../reducers/department-user.reducer';
import { State } from './../';
import { Structure } from './../../core/enum/structure.enum';
import { DepartmentUser } from './../../core/model/department-user.model';
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
    const departmentGroupEmployees = departments.filter(department => department.employees.some(employee => employee.login === paramLogin))[0];

    return departmentGroupEmployees?.employees?.filter(employee => employee.login === paramLogin)[0];
  }
);

export const selectDepartmentEmployeeDepartmentUser = createSelector(
  selectAllDepartmentUser,
  selectorsRoute.selectSelectedCardLoginEmloyee,
  (departments, paramLogin) => {
    return departments.filter(department => department.employees.some(employee => employee.login === paramLogin))[0];
  }
);

export const selectOneDepartmentUser = createSelector(
  selectDepartmentUserEntities,
  (departmentUser, { id }) => {
    return departmentUser[id];
  }
);

export const selectOneDepartmentUserTest = createSelector(
  selectDepartmentUserEntities,
  (departmentUser, { id }) => {
    return {
      test: departmentUser[id]
    };
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

export const boardDepartmentLevel = createSelector(
  selectAllDepartmentUser,
  (departmentUsers) => {
    return departmentUsers.filter(departmentUser => departmentUser.employees.some(employee => employee.level === Structure[Structure.BOARD])
    ).map(
      departments => {
        return {
          ...departments,
          employees: departments.employees.filter(employee => employee.level === Structure[Structure.BOARD])
        }
      }
    );
  }
);

export const directorDepartmentLevel = createSelector(
  selectAllDepartmentUser,
  (departmentUsers) => {
    return departmentUsers.filter(departmentUser => departmentUser.employees.some(employee => employee.level === Structure[Structure.DEPARTMENT_MANAGER])
    ).map(
      departments => {
        return {
          ...departments,
          employees: departments.employees.filter(employee => employee.level === Structure[Structure.DEPARTMENT_MANAGER])
        }
      }
    );
  }
);

export const departmentManagerDepartmentLevel = createSelector(
  selectAllDepartmentUser,
  (departmentUsers) => {
    return departmentUsers.filter(departmentUser => departmentUser.employees.some(employee => employee.level === Structure[Structure.DIRECTOR])
    ).map(
      departments => {
        return {
          ...departments,
          employees: departments.employees.filter(employee => employee.level === Structure[Structure.DIRECTOR])
        }
      }
    );
  }
);

export const departmentSelectUsers = createSelector(
  selectAllDepartmentUser,
  (departmentUsers) => {
    const arrays2: User[] =  [];
    return departmentUsers.map(
      departments => {
      const arrays: User[] =  departments.employees;
      arrays.forEach(
        departmentUser => arrays2.push(departmentUser)
      )
      return departments.employees;
      }
    );
  }
);

export const departmentSelectUsers2 = createSelector(
  departmentSelectUsers,
  (departmentUsers) => {
      const users: User[] = [];
      departmentUsers.map(
        user => {
          users.push(...user);
        }
      );

      return users;
      }
    );

export const getDepartmentSelectUsers = createSelector(
  departmentSelectUsers,
  (departmentUsers) => {
      const users: User[] = [];
      departmentUsers.map(
        arrUser => {
          users.push(...arrUser);
        }
      );

      return users;
      }
    );

export const treeDepartmentLevel = createSelector(
  boardDepartmentLevel,
  directorDepartmentLevel,
  departmentManagerDepartmentLevel,
  (
    boards: DepartmentUser[],
    directors: DepartmentUser[],
    departmentManager: DepartmentUser[]
    ) => {
    const tree: Array<object> = [];
    tree.push(...boards, ...directors);
    // tree.forEach( (department: DepartmentUser) => {
    //   department.employees.forEach(
    //     employee => {
    //       employee.workers = ["ds"];
    //     }
    //   );
    // });

    return tree;
  }
);

export const selectDepartmentLevel = createSelector(
  selectAllDepartmentUser,
  (departmentUsers, { idLevel, supervisorId }) => {
    return departmentUsers.filter(departmentUser => {
      if (supervisorId === null) { return departmentUser.employees.some(employee => employee.level === idLevel) }
      if (supervisorId != null) {
        return departmentUser.employees.some(employee => {

          return employee.level === idLevel && employee.supervisorId === supervisorId
        })
      } //.name === Structure[Structure.BOARD]

    }).map(
      departments => {
        if (supervisorId === null) {
          return {
            ...departments,
            employees: departments.employees.filter(employee => employee.level === idLevel)
          }
        }

        if (supervisorId != null) {

          return {
            ...departments,
            employees: departments.employees.filter(employee => employee.level === idLevel && employee.supervisorId === supervisorId)
          }
        }
      }
    );
  }
);

export const selectDepartmentLevelEmployees = createSelector(
  selectAllDepartmentUser,
  (departmentUsers, { idLevel, supervisorId }) => {
    return departmentUsers.filter(departmentUser => {
      return departmentUser.employees.some(employee => employee.level === idLevel) //.name === Structure[Structure.BOARD]
    }).map(
      departments => {
        return {
          ...departments,
          employees: departments.employees.filter(employee => employee.level === idLevel)
        }
      }
    );
  }
);

// export const selectEmployeesDepartmentLevel = (idLevel) = createSelector(
//   selectDepartmentLevel,
//   (departments, params) => departments,
//   (departments, {id}, )
// );


