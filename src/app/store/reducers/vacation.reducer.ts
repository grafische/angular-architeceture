import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as VacationActions from '../actions/vacation.actions';
import { Vacation } from './../../core/model/vacation.model';

export const vacationsFeatureKey = 'vacations';

export interface State extends EntityState<Vacation> {
  // additional entities state properties
  gettingStatus: boolean,
  error: Error;
}

export function selectVacationId(a: Vacation): number {
  //In this case this would be optional since primary key is id
  return a.leaveId;
}

export const adapter: EntityAdapter<Vacation> = createEntityAdapter<Vacation>({
  selectId: selectVacationId,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  gettingStatus: false,
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(VacationActions.addVacationSuccess,
    (state, action) => {
      if(!action.vacation.isSentToEmployee || !action.vacation.isSentToSuperior) {
        return adapter.addOne(action.vacation, { ...state, gettingStatus: false, error: {
          isSentToEmployee: action.vacation.isSentToEmployee,
          isSentToSuperior:  action.vacation.isSentToSuperior,
          isSentToHR: action.vacation.isSentToHR
        }
      });
      }
      return adapter.addOne(action.vacation, { ...state, gettingStatus: false, error: null})
    }
  ),
  on(VacationActions.addVacationFailure,
    (state, action) => adapter.getInitialState({ ...state, gettingStatus: false, error: action.error })
  ),
  on(VacationActions.upsertVacation,
    (state, action) => adapter.upsertOne(action.vacation, state)
  ),
  on(VacationActions.addVacations,
    (state, action) => adapter.addMany(action.vacations, { ...state, gettingStatus: true})
  ),
  on(VacationActions.addVacation,
    (state, action) => adapter.getInitialState({ ...state, gettingStatus: true})
  ),
  on(VacationActions.upsertVacations,
    (state, action) => adapter.upsertMany(action.vacations, state)
  ),
  on(VacationActions.updateVacation,
    (state, action) => adapter.updateOne(action.vacation, state)
  ),
  on(VacationActions.updateVacations,
    (state, action) => adapter.updateMany(action.vacations, state)
  ),
  on(VacationActions.deleteVacation,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(VacationActions.deleteVacations,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(VacationActions.loadVacations,
    (state, action) => adapter.setAll(action.vacations, state)
  ),
  on(VacationActions.clearVacations,
    state => adapter.removeAll(state)
  ),
);

//export const selectGettingStatus = (state: State) => state.gettingStatus;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
