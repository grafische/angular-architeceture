import { DepartmentUser } from './../../core/model/department-user.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromDepartmentUser from '../reducers/department-user.reducer';

export interface DepartmentId {
  id: number;
}

export const selectDepartmentUsersState = (state: State) => state.departmentUsers;
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

export const selectOneDepartmentUser = createSelector(
  selectDepartmentUserEntities,
  (departmentUser, {id}) => {
    return departmentUser[id];
  }
);

export const getErrorDepartmentUser = createSelector(
  selectDepartmentUsersState,
  state => state.error
);

