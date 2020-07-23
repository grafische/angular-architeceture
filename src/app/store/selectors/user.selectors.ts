import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
//import { EntityState } from '../reducers';
import * as fromUser from '../reducers/user.reducer';

// export const getEntityState = createFeatureSelector<EntityState>('entityCache');

// export const getUserState = (state: EntityState) => state.user;

// export const selectOneUser = createSelector(
//   getUserState,
//   (state: fromUser.UserState) => reducers.user
// );


export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<fromUser.State>('entities');

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
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);
