import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Smaple } from './../../../core/model/smaple.model';

export const enter = createAction(
  '[Smaple] Enter Smaples'
);

export const loadSmaplesFailure = createAction(
  '[Smaple] Load Smaples Failure',
  props<{ error: any }>()
);

export const loadSmaples = createAction(
  '[Smaple/API] Load Smaples',
  props<{ smaples: Smaple[] }>()
);

export const addSmaple = createAction(
  '[Smaple/API] Add Smaple',
  props<{ smaple: Smaple }>()
);

export const upsertSmaple = createAction(
  '[Smaple/API] Upsert Smaple',
  props<{ smaple: Smaple }>()
);

export const addSmaples = createAction(
  '[Smaple/API] Add Smaples',
  props<{ smaples: Smaple[] }>()
);

export const upsertSmaples = createAction(
  '[Smaple/API] Upsert Smaples',
  props<{ smaples: Smaple[] }>()
);

export const updateSmaple = createAction(
  '[Smaple/API] Update Smaple',
  props<{ smaple: Update<Smaple> }>()
);

export const updateSmaples = createAction(
  '[Smaple/API] Update Smaples',
  props<{ smaples: Update<Smaple>[] }>()
);

export const deleteSmaple = createAction(
  '[Smaple/API] Delete Smaple',
  props<{ id: string }>()
);

export const deleteSmaples = createAction(
  '[Smaple/API] Delete Smaples',
  props<{ ids: string[] }>()
);

export const clearSmaples = createAction(
  '[Smaple/API] Clear Smaples'
);
