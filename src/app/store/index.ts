import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as fromUser from './reducers/user.reducer';
import * as fromVacations from './reducers/vacation.reducer';
import * as fromDepartments from './reducers/department.reducer';
import * as fromVacationTypes from './reducers/vacation-type.reducer';

export * from './actions';
export * from './services';


export interface State {
  users: fromUser.State;
  vacations: fromVacations.State;
  departments: fromDepartments.State;
  vacationTypes: fromVacationTypes.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
  vacations: fromVacations.reducer,
  departments: fromDepartments.reducer,
  vacationTypes: fromVacationTypes.reducer
};
