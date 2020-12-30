import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from './../../core/model/user.model';
import { DepartmentUser } from '../../core/model/department-user.model';

export const enterDepartmentUsers = createAction(
  '[DepartmentUser/API] Enter'
);

export const loadDepartmentUsers = createAction(
  '[DepartmentUser/API] Load DepartmentUsers',
  props<{ departmentUsers: DepartmentUser[] }>()
);

export const addDepartmentUser = createAction(
  '[DepartmentUser/API] Add DepartmentUser',
  props<{ departmentUser: DepartmentUser, user: User }>()
);

export const addedDepartmentUser = createAction(
  '[DepartmentUser/API] Add DepartmentUser',
  props<{ departmentUser: DepartmentUser, user: User }>()
);


export const addOneDepartmentUser = createAction(
  '[DepartmentUser/API] AddOne DepartmentUser',
  props<{ departmentUser, user: User }>()
);

export const addedOneDepartmentUser = createAction(
  '[DepartmentUser/API] AddOne DepartmentUser',
  props<{ departmentUser: Update<DepartmentUser>, user:  User }>()
);


export const upsertDepartmentUser = createAction(
  '[DepartmentUser/API] Upsert DepartmentUser',
  props<{ departmentUser: DepartmentUser }>()
);

export const addDepartmentUsers = createAction(
  '[DepartmentUser/API] Add DepartmentUsers',
  props<{ departmentUsers: DepartmentUser[] }>()
);

export const upsertDepartmentUsers = createAction(
  '[DepartmentUser/API] Upsert DepartmentUsers',
  props<{ departmentUsers: DepartmentUser[] }>()
);

export const updateDepartmentOneUser = createAction(
  '[DepartmentUser/API] Update DepartmentOneUser',
  props<{ departmentUser: Update<DepartmentUser>, user:  User }>()
);

export const updatedDepartmentOneUser = createAction(
  '[DepartmentUser/API] Updated DepartmentOneUser',
  props<{ departmentUser: Update<DepartmentUser>, user:  User }>()
);

export const updateDepartmentUser = createAction(
  '[DepartmentUser/API] Update DepartmentUser',
  props<{ departmentUser: Update<DepartmentUser>, user:  User }>()
);

export const updatedDepartmentUser = createAction(
  '[DepartmentUser/API] Updated DepartmentUser',
  props<{ departmentUser: Update<DepartmentUser>, user:  User }>()
);

export const updateDepartmentUsers = createAction(
  '[DepartmentUser/API] Update DepartmentUsers',
  props<{ departmentUsers: Update<DepartmentUser>[] }>()
);

export const deleteDepartmentUser = createAction(
  '[DepartmentUser/API] Delete DepartmentUser',
  props<{ id: string }>()
);

export const deleteDepartmentUsers = createAction(
  '[DepartmentUser/API] Delete DepartmentUsers',
  props<{ ids: string[] }>()
);

export const clearDepartmentUsers = createAction(
  '[DepartmentUser/API] Clear DepartmentUsers'
);

export const loadDepartmentUsersFailure = createAction(
  '[DepartmentUser/API] Load departmentsUsers error DepartmentUsers',
  props<{ error }>()
);

export const upgradeDepartmentUsersFailure = createAction(
  '[DepartmentUser/API] Upgrade departmentsUsers error DepartmentUsers',
  props<{ error }>()
);

export const selectDepartmentUser = createAction(
  '[DepartmentUser/API] Select DepartmentUser',
  props<{ departmentUsers: DepartmentUser[], id: number }>()
);
