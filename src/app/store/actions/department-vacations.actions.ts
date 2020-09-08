import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { DepartmentVacations } from '../../core/model/department-vacations.model';

export const enterDepartmentVacations = createAction(
  '[DepartmentVacations/API] Enter',
  props<{  id: number }>()
);

export const loadDepartmentVacations = createAction(
  '[DepartmentVacations/API] Load DepartmentVacationss',
  props<{ departmentVacations: DepartmentVacations[] }>()
);

export const addDepartmentVacations = createAction(
  '[DepartmentVacations/API] Add DepartmentVacations',
  props<{ departmentVacations: DepartmentVacations }>()
);

export const upsertDepartmentVacations = createAction(
  '[DepartmentVacations/API] Upsert DepartmentVacations',
  props<{ departmentVacations: DepartmentVacations }>()
);

export const upsertDepartmentVacationss = createAction(
  '[DepartmentVacations/API] Upsert DepartmentVacationss',
  props<{ departmentVacations: DepartmentVacations[] }>()
);

export const updateDepartmentVacations = createAction(
  '[DepartmentVacations/API] Update DepartmentVacations',
  props<{ departmentVacations: Update<DepartmentVacations> }>()
);

export const updateDepartmentVacationss = createAction(
  '[DepartmentVacations/API] Update DepartmentVacationss',
  props<{ departmentVacations: Update<DepartmentVacations>[] }>()
);

export const deleteDepartmentVacations = createAction(
  '[DepartmentVacations/API] Delete DepartmentVacations',
  props<{ id: string }>()
);

export const clearDepartmentVacations = createAction(
  '[DepartmentVacations/API] Clear DepartmentVacationss'
);

export const loadDepartmentVacationsFailure = createAction(
  '[DepartmentVacations/API] Clear DepartmentVacationss',
  props<{ error }>()
);
