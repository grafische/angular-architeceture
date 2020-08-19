import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromVacationType from '../reducers/vacation-type.reducer';


export const selectVacationTypesState = (state: State) => state.vacationTypes;
export const selectAllVacationType = createSelector(
  selectVacationTypesState,
  fromVacationType.selectAll
);

export const getErrorVacationType = createSelector(
  selectVacationTypesState,
  state => state.error
);

