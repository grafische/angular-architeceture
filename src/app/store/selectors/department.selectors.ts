import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromDepartment from '../reducers/department.reducer';


export const selectDepartmentsState = (state: State) => state.departments;
export const selectAllDepartment = createSelector(
  selectDepartmentsState,
  fromDepartment.selectAll
);

export const getErrorDepartment = createSelector(
  selectDepartmentsState,
  state => state.error
);
