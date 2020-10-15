import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../core/model/user.model';
import * as AuthActions from '../actions/auth.actions';

export interface State {
  gettingStatus: boolean;
  user: null | User;
  error: null | string;
}

export const initialState: State = {
  gettingStatus: true,
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.logout, (state, action) => {
    return {
      gettingStatus: false,
      user: null,
      error: null
    };
  }),
  on(AuthActions.login, (state, action) => {
    return {
      gettingStatus: true,
      user: null,
      error: null
    };
  }),
  on(AuthActions.getAuthStatusSuccess, (state, action) => {
    return {
      gettingStatus: false,
      user: action.user,
      error: null
    };
  }),
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      gettingStatus: false,
      user: action.user,
      error: null
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      gettingStatus: false,
      user: null,
      error: action.reason
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

export const selectGettingStatus = (state: State) => state.gettingStatus;
export const selectUser = (state: State) => state.user;
export const selectError = (state: State) => state.error;
