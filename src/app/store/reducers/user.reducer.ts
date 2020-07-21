import { User } from './../../core/model/user';
import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as UserActions from '../actions';

export const userFeatureKey = 'user';

export interface UserState extends EntityState<User> {
  userId: string | null;
}

export const adapter = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  userId: null
});


export const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, (state, action) => {
    return {
      ...state
    };
  }),
  on(UserActions.getUserSuccess, (state, action) => {
    return adapter.addOne(action.user, state);
  }),
  on(UserActions.loadUsersFailure, (state, action) => {
    return {
      ...state
    };
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

