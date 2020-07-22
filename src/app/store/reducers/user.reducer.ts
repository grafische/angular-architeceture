//import { selectOneUser } from './../selectors/user.selectors';
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

export const selectUserState = (state: UserState) => state;

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, state => {
    return {
      ...state,
      userId: null
    }
  }),
  on(UserActions.getUserSuccess, (state, { user }) => {
    return adapter.setAll(user, state);
  }),
  on(UserActions.addUsers, (state, { user }) => {
    return adapter.addMany(user, state);
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


const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
