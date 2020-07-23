import { createAction, props } from '@ngrx/store';

export const loadSmaples = createAction(
  '[Smaple] Load Smaples'
);

export const loadSmaplesSuccess = createAction(
  '[Smaple] Load Smaples Success',
  props<{ data: any }>()
);

export const loadSmaplesFailure = createAction(
  '[Smaple] Load Smaples Failure',
  props<{ error: any }>()
);
