import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromDepartmentVacations from '../reducers/department-vacations.reducer';


export const selectDepartmentVacationsState = (state: State) => state.departmentVacations;
export const selectAllDepartmentVacations = createSelector(
  selectDepartmentVacationsState,
  fromDepartmentVacations.selectAll
);

export const getErrorDepartmentVacations = createSelector(
  selectDepartmentVacationsState,
  state => state.error
);

