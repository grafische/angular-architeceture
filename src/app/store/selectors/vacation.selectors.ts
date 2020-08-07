import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromVacation from '../reducers/vacation.reducer';


export const selectVacationsState = (state: State) => state.vacations;
export const selectAllVacation = createSelector(
  selectVacationsState,
  fromVacation.selectAll
);

export const getErrorVacation = createSelector(
  selectVacationsState,
  state => state.error
);
