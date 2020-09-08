import { Vacation } from 'src/app/core/model/vacation.model';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Dictionary } from '@ngrx/entity';
import { DepartmentOwn } from './../../core/model/department-own.model';
import * as DepartmentOwnActions from '../actions/department-own.actions';

export const DepartmentOwnsFeatureKey = 'DepartmentOwns';

export interface State extends EntityState<Vacation> {
  // additional entities state properties
  error: Error;
}

export function selectDepartmentOwnId(a: Vacation): number {
  //In this case this would be optional since primary key is id
  return a.leaveId;
}


export const adapter: EntityAdapter<Vacation> = createEntityAdapter<Vacation>({
  selectId: selectDepartmentOwnId,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(DepartmentOwnActions.addDepartmentOwn,
    (state, action) => adapter.addOne(action.vacation, state)
  ),
  on(DepartmentOwnActions.upsertDepartmentOwn,
    (state, action) => adapter.upsertOne(action.vacation, state)
  ),
  on(DepartmentOwnActions.addDepartmentOwns,
    (state, action) => adapter.addMany(action.departmentOwns, state)
  ),
  on(DepartmentOwnActions.upsertDepartmentOwns,
    (state, action) => adapter.upsertMany(action.departmentOwns, state)
  ),
  on(DepartmentOwnActions.updateDepartmentOwn,
    // (state, action) => adapter.updateOne(action.departmentOwn, state) /{ id: action.departmentOwn.id, changes: action.departmentOwn },
  ),
  on(DepartmentOwnActions.updateDepartmentOwns,
    (state, action) => adapter.updateMany(action.departmentOwns, state)
  ),
  on(DepartmentOwnActions.deleteDepartmentOwn,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DepartmentOwnActions.deleteDepartmentOwns,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DepartmentOwnActions.loadDepartmentOwns,
    (state, action) => adapter.setAll(action.departmentOwns, state)
  ),
  on(DepartmentOwnActions.clearDepartmentOwns,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

