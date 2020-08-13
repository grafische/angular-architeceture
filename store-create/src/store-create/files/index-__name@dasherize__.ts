import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as fromUser from './reducers/user.reducer';
import * as fromVacations from './reducers/vacation.reducer';
//copy line
import * as from<%= classify(name) %>s from './reducers/<%= dasherize(name) %>.reducer';

export * from './actions';
export * from './services';


export interface State {
  users: fromUser.State;
  vacations: fromVacations.State;
  //copy line
  <%= camelize(name) %>s: from<%= classify(name) %>s.State;

}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
  vacations: fromVacations.reducer,
  //copy line
  <%= camelize(name) %>s: from<%= classify(name) %>s.reducer
};
