import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as actions from '../actions';
import * as fromUser from './user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};
// import { UserState } from './user.reducer';

// export type Action = actions.CustomerAction;

// export interface EntityState {
//   user: fromUser.UserState;
// }

// export const reducers: ActionReducerMap<EntityState> = {
//   user: fromUser.reducer
// };

// export const metaReducers: MetaReducer<EntityState>[] = [];

