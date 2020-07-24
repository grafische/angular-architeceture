import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
//import { EntityState } from '../reducers';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);

// get the selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromUser.adapter.getSelectors(selectUserState);


