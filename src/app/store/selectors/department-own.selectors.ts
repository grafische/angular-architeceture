import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromDepartmentOwn from '../reducers/department-own.reducer';


export const selectDepartmentOwnsState = (state: State) => state.departmentOwns;
export const selectAllDepartmentOwn = createSelector(
  selectDepartmentOwnsState,
  fromDepartmentOwn.selectAll
);

export const getErrorDepartmentOwn = createSelector(
  selectDepartmentOwnsState,
  state => state.error
);

