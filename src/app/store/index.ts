import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromUser from './reducers/user.reducer';
import * as fromVacations from './reducers/vacation.reducer';
import * as fromDepartments from './reducers/department.reducer';
import * as fromVacationTypes from './reducers/vacation-type.reducer';
import * as fromAuths from './reducers/auth.reducer';
import * as fromDepartmentUsers from './reducers/department-user.reducer';
import * as fromDepartmentOwns from './reducers/department-own.reducer';
import * as fromDepartmentVacations from './reducers/department-vacations.reducer';


export * from './actions';
export * from './services';


export interface State {
  router: fromRouter.RouterReducerState<any>;
  users: fromUser.State;
  vacations: fromVacations.State;
  departments: fromDepartments.State;
  departmentUsers: fromDepartmentUsers.State;
  vacationTypes: fromVacationTypes.State;
  auths: fromAuths.State;
  departmentOwns: fromDepartmentOwns.State;
  departmentVacations: fromDepartmentVacations.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  users: fromUser.reducer,
  vacations: fromVacations.reducer,
  departments: fromDepartments.reducer,
  departmentUsers: fromDepartmentUsers.reducer,
  vacationTypes: fromVacationTypes.reducer,
  auths: fromAuths.reducer,
  departmentOwns: fromDepartmentOwns.reducer,
  departmentVacations: fromDepartmentVacations.reducer
};
