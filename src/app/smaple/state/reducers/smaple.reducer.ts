import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Smaple } from './../../../core/model/smaple.model';
import * as SmapleActions from './../actions/smaple.actions';

export const smaplesFeatureKey = 'smaples';

export interface State extends EntityState<Smaple> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Smaple> = createEntityAdapter<Smaple>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(SmapleActions.addSmaple,
    (state, action) => adapter.addOne(action.smaple, state)
  ),
  on(SmapleActions.upsertSmaple,
    (state, action) => adapter.upsertOne(action.smaple, state)
  ),
  on(SmapleActions.addSmaples,
    (state, action) => adapter.addMany(action.smaples, state)
  ),
  on(SmapleActions.upsertSmaples,
    (state, action) => adapter.upsertMany(action.smaples, state)
  ),
  on(SmapleActions.updateSmaple,
    (state, action) => adapter.updateOne(action.smaple, state)
  ),
  on(SmapleActions.updateSmaples,
    (state, action) => adapter.updateMany(action.smaples, state)
  ),
  on(SmapleActions.deleteSmaple,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(SmapleActions.deleteSmaples,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(SmapleActions.loadSmaples,
    (state, action) => adapter.setAll(action.smaples, state)
  ),
  on(SmapleActions.clearSmaples,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();


// select the array of user ids
export const selectSmapleIds = selectIds;

// select the dictionary of user entities
export const selectSmapleEntities = selectEntities;

// select the array of users
export const selectAllSmaples = selectAll;

// select the total user count
export const selectSmapleTotal = selectTotal;
