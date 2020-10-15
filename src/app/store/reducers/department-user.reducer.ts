import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DepartmentUser } from './../../core/model/department-user.model';
import * as DepartmentUserActions from '../actions/department-user.actions';

export const DepartmentUsersFeatureKey = 'DepartmentUsers';

export interface State extends EntityState<DepartmentUser> {
  // additional entities state properties
  error: Error;
}

export function selectDepartmentUserId(a: DepartmentUser): number {
  //In this case this would be optional since primary key is id
  return a.id;
}


export const adapter: EntityAdapter<DepartmentUser> = createEntityAdapter<DepartmentUser>({
  selectId: selectDepartmentUserId,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(DepartmentUserActions.addDepartmentUser,
    (state, action) => adapter.addOne(action.departmentUser, state)
  ),
  on(DepartmentUserActions.upsertDepartmentUser,
    (state, action) => adapter.upsertOne(action.departmentUser, state)
  ),
  on(DepartmentUserActions.addDepartmentUsers,
    (state, action) => adapter.addMany(action.departmentUsers, state)
  ),
  on(DepartmentUserActions.upsertDepartmentUsers,
    (state, action) => adapter.upsertMany(action.departmentUsers, state)
  ),
  on(DepartmentUserActions.updatedDepartmentUser,
    (state, action) => adapter.updateOne(action.departmentUser, state)
  ),
  on(DepartmentUserActions.updateDepartmentUsers,
    (state, action) => adapter.updateMany(action.departmentUsers, state)
  ),
  on(DepartmentUserActions.deleteDepartmentUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DepartmentUserActions.deleteDepartmentUsers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DepartmentUserActions.loadDepartmentUsers,
    (state, action) => adapter.setAll(action.departmentUsers, state)
  ),
  on(DepartmentUserActions.clearDepartmentUsers,
    state => adapter.removeAll(state)
  ),
  on(DepartmentUserActions.selectDepartmentUser,
    (state, action) => (action.departmentUsers, action.id, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

