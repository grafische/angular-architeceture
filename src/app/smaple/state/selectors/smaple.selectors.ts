import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSmaple from '../reducers/smaple.reducer';

export const selectSmapleState = createFeatureSelector<fromSmaple.State>(
  fromSmaple.smaplesFeatureKey
);


export const selectSmapleIds = createSelector(
  selectSmapleState,
  fromSmaple.selectSmapleIds // shorthand for SmaplesState => fromSmaple.selectSmapleIds(SmaplesState)
);
export const selectSmapleEntities = createSelector(
  selectSmapleState,
  fromSmaple.selectSmapleEntities
);
export const selectAllSmaples = createSelector(
  selectSmapleState,
  fromSmaple.selectAllSmaples
);
export const selectSmapleTotal = createSelector(
  selectSmapleState,
  fromSmaple.selectSmapleTotal
);
// export const selectCurrentSmapleId = createSelector(
//   selectSmapleState,
//   fromSmaple.getSelectedSmapleId
// );

// export const selectCurrentSmaple = createSelector(
//   selectSmapleEntities,
//   selectCurrentSmapleId,
//   (SmapleEntities, SmapleId) => SmapleEntities[SmapleId]
// );

