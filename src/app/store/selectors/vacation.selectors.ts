import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromVacation from '../reducers/vacation.reducer';


export const selectVacationsState = (state: State) => state.vacations;
export const selectGettingStatus = (state: State) => state.vacations.gettingStatus;

export const selectAllVacation = createSelector(
  selectVacationsState,
  fromVacation.selectAll
);

export const selectGettingAddVacationStatus = createSelector(
  selectGettingStatus,
  ( status: boolean ) => status
);

export const getErrorVacation = createSelector(
  selectVacationsState,
  state => state.error
);
