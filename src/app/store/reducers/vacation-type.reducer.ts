import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { VacationType } from './../../core/model/vacation-type.model';
import * as VacationTypeActions from '../actions/vacation-type.actions';

export const VacationTypesFeatureKey = 'VacationTypes';

export interface State extends EntityState<VacationType> {
  // additional entities state properties
  error: Error;
}

export function selectVacationTypeId(a: VacationType): number {
  //In this case this would be optional since primary key is id
  return a.id;
}


export const adapter: EntityAdapter<VacationType> = createEntityAdapter<VacationType>({
  selectId: selectVacationTypeId,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(VacationTypeActions.addVacationType,
    (state, action) => adapter.addOne(action.vacationType, state)
  ),
  on(VacationTypeActions.upsertVacationType,
    (state, action) => adapter.upsertOne(action.vacationType, state)
  ),
  on(VacationTypeActions.addVacationTypes,
    (state, action) => adapter.addMany(action.vacationTypes, state)
  ),
  on(VacationTypeActions.upsertVacationTypes,
    (state, action) => adapter.upsertMany(action.vacationTypes, state)
  ),
  on(VacationTypeActions.updateVacationType,
    (state, action) => adapter.updateOne(action.vacationType, state)
  ),
  on(VacationTypeActions.updateVacationTypes,
    (state, action) => adapter.updateMany(action.vacationTypes, state)
  ),
  on(VacationTypeActions.deleteVacationType,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(VacationTypeActions.deleteVacationTypes,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(VacationTypeActions.loadVacationTypes,
    (state, action) => adapter.setAll(action.vacationTypes, state)
  ),
  on(VacationTypeActions.clearVacationTypes,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

