import { Vacation } from 'src/app/core/model/vacation.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { DepartmentOwn } from '../../core/model/department-own.model';

export const enterDepartmentOwns = createAction(
  '[DepartmentOwn/API] Enter'
);

export const loadDepartmentOwns = createAction(
  '[DepartmentOwn/API] Load DepartmentOwns',
  props<{ departmentOwns: Vacation[] }>()
);

export const addDepartmentOwn = createAction(
  '[DepartmentOwn/API] Add DepartmentOwn',
  props<{ vacation: Vacation }>()
);

export const addDepartmentOwnSuccess = createAction(
  '[DepartmentOwn/API] Add DepartmentOwn',
  props<{ vacation: Vacation }>()
);

export const upsertDepartmentOwn = createAction(
  '[DepartmentOwn/API] Upsert DepartmentOwn',
  props<{ vacation: Vacation }>()
);

export const addDepartmentOwns = createAction(
  '[DepartmentOwn/API] Add DepartmentOwns',
  props<{ departmentOwns: Vacation[] }>()
);

export const upsertDepartmentOwns = createAction(
  '[DepartmentOwn/API] Upsert DepartmentOwns',
  props<{ departmentOwns: Vacation[] }>()
);

export const updateDepartmentOwn = createAction(
  '[DepartmentOwn/API] Update DepartmentOwn',
  props<{ vacation: Update<DepartmentOwn> }>()
);

export const updateDepartmentOwns = createAction(
  '[DepartmentOwn/API] Update DepartmentOwns',
  props<{ departmentOwns: Update<DepartmentOwn>[] }>()
);

export const deleteDepartmentOwn = createAction(
  '[DepartmentOwn/API] Delete DepartmentOwn',
  props<{ id: string }>()
);

export const deleteDepartmentOwns = createAction(
  '[DepartmentOwn/API] Delete DepartmentOwns',
  props<{ ids: string[] }>()
);

export const clearDepartmentOwns = createAction(
  '[DepartmentOwn/API] Clear DepartmentOwns'
);

export const loadDepartmentOwnsFailure = createAction(
  '[DepartmentOwn/API] Clear DepartmentOwns',
  props<{ error }>()
);
