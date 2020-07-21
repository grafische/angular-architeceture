import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import * as actions from '../actions';
import * as userReducers from './user.reducer';
import { UserState } from './user.reducer';

// export type Action = actions.CustomerAction;

export interface EntityState {
  user: userReducers.UserState;
}

export const reducers: ActionReducerMap<EntityState> = {
  user: userReducers.reducer
};

export const metaReducers: MetaReducer<EntityState>[] = [];
