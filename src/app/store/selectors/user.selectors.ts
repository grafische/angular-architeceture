import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, reducers } from '../reducers';
import { UserState } from '../reducers/user.reducer';

export const getEntityState = createFeatureSelector<EntityState>('entityCache');

export const getUserState = (state: EntityState) => state.user;

export const selectOneUser = createSelector(
  getUserState,
  (state: UserState) => reducers.user
);
