import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';
import { State } from './../';

export const selectUsersState = (state: State) => state.users;
export const selectAllUser = createSelector(
  selectUsersState,
  fromUser.selectAll
);

export const getErrorUser = createSelector(
  selectUsersState,
  state => state.error
);
