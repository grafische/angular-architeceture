import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromDepartmentVacations from '../reducers/department-vacations.reducer';


export const selectDepartmentVacationsState = (state: State) => state.departmentVacations;
export const selectGettingStatus = (state: State) => state.departmentVacations.gettingStatus;

export const selectAllDepartmentVacations = createSelector(
  selectDepartmentVacationsState,
  fromDepartmentVacations.selectAll
);

export const getErrorDepartmentVacations = createSelector(
  selectDepartmentVacationsState,
  state => state.error
);

export const selectGettingDepartmentStatus = createSelector(
  selectGettingStatus,
  ( status: boolean ) => status
);
