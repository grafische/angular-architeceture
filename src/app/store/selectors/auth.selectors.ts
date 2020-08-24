import { User } from './../../core/model/user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as fromAuth from '../reducers/auth.reducer';


/**
 * Auth Selectors
 */
export const selectAuthState = (state: State) => state.auths;
export const selectGettingAuthStatus = createSelector(
  selectAuthState,
  fromAuth.selectGettingStatus
);
export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectUser
);
export const selectAuthError = createSelector(
  selectAuthState,
  fromAuth.selectError
);

export const selectLoggedIn = createSelector(fromAuth.selectUser, (user) => user);
