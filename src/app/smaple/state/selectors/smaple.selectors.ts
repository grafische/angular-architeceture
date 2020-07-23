import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSmaple from '../reducers/smaple.reducer';

export const selectSmapleState = createFeatureSelector<fromSmaple.State>(
  fromSmaple.smapleFeatureKey
);
