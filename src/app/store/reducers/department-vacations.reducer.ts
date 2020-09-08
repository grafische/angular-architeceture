import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DepartmentVacations } from './../../core/model/department-vacations.model';
import * as DepartmentVacationsActions from '../actions/department-vacations.actions';

export const DepartmentVacationssFeatureKey = 'DepartmentVacationss';

export interface State extends EntityState<DepartmentVacations> {
  // additional entities state properties
  error: Error;
}

export function selectDepartmentVacationsId(a: DepartmentVacations): string {
  //In this case this would be optional since primary key is id
  return a.login;
}


export const adapter: EntityAdapter<DepartmentVacations> = createEntityAdapter<DepartmentVacations>({
  selectId: selectDepartmentVacationsId,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(DepartmentVacationsActions.enterDepartmentVacations,
    (state, action) => {
      return { ...state, departmentId: action.id }
    }
  ),
  on(DepartmentVacationsActions.addDepartmentVacations,
    (state, action) => adapter.addOne(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.upsertDepartmentVacations,
    (state, action) => adapter.upsertOne(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.upsertDepartmentVacationss,
    (state, action) => adapter.upsertMany(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.updateDepartmentVacations,
    (state, action) => adapter.updateOne(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.updateDepartmentVacationss,
    (state, action) => adapter.updateMany(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.deleteDepartmentVacations,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DepartmentVacationsActions.loadDepartmentVacations,
    (state, action) => adapter.setAll(action.departmentVacations, state)
  ),
  on(DepartmentVacationsActions.clearDepartmentVacations,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

