import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Vacation } from './../../core/model/vacation.model';

export const enterVacations = createAction(
  "[Vacations/API] Enter"
);

export const loadVacations = createAction(
  '[Vacation/API] Load Vacations',
  props<{ vacations: Vacation[] }>()
);

export const addVacation = createAction(
  '[Vacation/API] Add Vacation',
  props<{ vacation: Vacation }>()
);

export const upsertVacation = createAction(
  '[Vacation/API] Upsert Vacation',
  props<{ vacation: Vacation }>()
);

export const addVacations = createAction(
  '[Vacation/API] Add Vacations',
  props<{ vacations: Vacation[] }>()
);

export const upsertVacations = createAction(
  '[Vacation/API] Upsert Vacations',
  props<{ vacations: Vacation[] }>()
);

export const updateVacation = createAction(
  '[Vacation/API] Update Vacation',
  props<{ vacation: Update<Vacation> }>()
);

export const updateVacations = createAction(
  '[Vacation/API] Update Vacations',
  props<{ vacations: Update<Vacation>[] }>()
);

export const deleteVacation = createAction(
  '[Vacation/API] Delete Vacation',
  props<{ id: number }>()
);

export const deleteVacations = createAction(
  '[Vacation/API] Delete Vacations',
  props<{ ids: number[] }>()
);

export const clearVacations = createAction(
  '[Vacation/API] Clear Vacations'
);

export const loadVacationsFailure = createAction(
  '[Vacation/API] Clear Vacations',
  props<{ error }>()
);

export const deletedVacation = createAction(
  '[Vacation/API] Deleted Vacation',
  props<{ id: number }>()
);
