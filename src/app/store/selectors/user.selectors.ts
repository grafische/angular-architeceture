import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
//import { EntityState } from '../reducers';
import * as fromUser from '../reducers/user.reducer';
import { State } from './../';
// export const selectUserState = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);

// // get the selectors
// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal,
// } = fromUser.adapter.getSelectors();


export const selectUsersState = (state: State) => state.users;
export const selectAllUser = createSelector(
  selectUsersState,
  fromUser.selectAll
);
