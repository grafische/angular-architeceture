import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, reducers } from '../reducers';
import * as fromUser from '../reducers/user.reducer';

// export const getEntityState = createFeatureSelector<EntityState>('entityCache');

// export const getUserState = (state: EntityState) => state.user;

// export const selectOneUser = createSelector(
//   getUserState,
//   (state: fromUser.UserState) => reducers.user
// );


export const getUsers = (state: fromUser.UserState) => state;

export const selectUserState = createFeatureSelector<fromUser.UserState>('entityCache');
//export const selectUserStateT = (state: EntityState) => state.user;

export const getUserState = createSelector(
  selectUserState,
  state => state
);

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
  //fromUser.selectUserState
  //fromUser.selectUserState
);
