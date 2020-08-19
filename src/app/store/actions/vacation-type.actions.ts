import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { VacationType } from '../../core/model/vacation-type.model';

export const enterVacationTypes = createAction(
  '[VacationType/API] Enter'
);

export const loadVacationTypes = createAction(
  '[VacationType/API] Load VacationTypes',
  props<{ vacationTypes: VacationType[] }>()
);

export const addVacationType = createAction(
  '[VacationType/API] Add VacationType',
  props<{ vacationType: VacationType }>()
);

export const upsertVacationType = createAction(
  '[VacationType/API] Upsert VacationType',
  props<{ vacationType: VacationType }>()
);

export const addVacationTypes = createAction(
  '[VacationType/API] Add VacationTypes',
  props<{ vacationTypes: VacationType[] }>()
);

export const upsertVacationTypes = createAction(
  '[VacationType/API] Upsert VacationTypes',
  props<{ vacationTypes: VacationType[] }>()
);

export const updateVacationType = createAction(
  '[VacationType/API] Update VacationType',
  props<{ vacationType: Update<VacationType> }>()
);

export const updateVacationTypes = createAction(
  '[VacationType/API] Update VacationTypes',
  props<{ vacationTypes: Update<VacationType>[] }>()
);

export const deleteVacationType = createAction(
  '[VacationType/API] Delete VacationType',
  props<{ id: string }>()
);

export const deleteVacationTypes = createAction(
  '[VacationType/API] Delete VacationTypes',
  props<{ ids: string[] }>()
);

export const clearVacationTypes = createAction(
  '[VacationType/API] Clear VacationTypes'
);

export const loadVacationTypesFailure = createAction(
  '[VacationType/API] Clear VacationTypes',
  props<{ error }>()
);
