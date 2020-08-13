import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { <%= classify(name) %> } from '../../core/model/<%= dasherize(name) %>.model';

export const enter<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Enter'
);

export const load<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Load <%= classify(name) %>s',
  props<{ <%= camelize(name) %>s: <%= classify(name) %>[] }>()
);

export const add<%= classify(name) %> = createAction(
  '[<%= classify(name) %>/API] Add <%= classify(name) %>',
  props<{ <%= camelize(name) %>: <%= classify(name) %> }>()
);

export const upsert<%= classify(name) %> = createAction(
  '[<%= classify(name) %>/API] Upsert <%= classify(name) %>',
  props<{ <%= camelize(name) %>: <%= classify(name) %> }>()
);

export const add<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Add <%= classify(name) %>s',
  props<{ <%= camelize(name) %>s: <%= classify(name) %>[] }>()
);

export const upsert<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Upsert <%= classify(name) %>s',
  props<{ <%= camelize(name) %>s: <%= classify(name) %>[] }>()
);

export const update<%= classify(name) %> = createAction(
  '[<%= classify(name) %>/API] Update <%= classify(name) %>',
  props<{ <%= camelize(name) %>: Update<<%= classify(name) %>> }>()
);

export const update<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Update <%= classify(name) %>s',
  props<{ <%= camelize(name) %>s: Update<<%= classify(name) %>>[] }>()
);

export const delete<%= classify(name) %> = createAction(
  '[<%= classify(name) %>/API] Delete <%= classify(name) %>',
  props<{ id: string }>()
);

export const delete<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Delete <%= classify(name) %>s',
  props<{ ids: string[] }>()
);

export const clear<%= classify(name) %>s = createAction(
  '[<%= classify(name) %>/API] Clear <%= classify(name) %>s'
);

export const load<%= classify(name) %>sFailure = createAction(
  '[<%= classify(name) %>/API] Clear <%= classify(name) %>s',
  props<{ error }>()
);



/*
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Department } from '../../core/model/department.model';

export const enterDepartments = createAction(
  '[Department/API] Enter'
);

export const loadDepartments = createAction(
  '[Department/API] Load Departments',
  props<{ departments: Department[] }>()
);

export const addDepartment = createAction(
  '[Department/API] Add Department',
  props<{ department: Department }>()
);

export const upsertDepartment = createAction(
  '[Department/API] Upsert Department',
  props<{ department: Department }>()
);

export const addDepartments = createAction(
  '[Department/API] Add Departments',
  props<{ departments: Department[] }>()
);

export const upsertDepartments = createAction(
  '[Department/API] Upsert Departments',
  props<{ departments: Department[] }>()
);

export const updateDepartment = createAction(
  '[Department/API] Update Department',
  props<{ department: Update<Department> }>()
);

export const updateDepartments = createAction(
  '[Department/API] Update Departments',
  props<{ departments: Update<Department>[] }>()
);

export const deleteDepartment = createAction(
  '[Department/API] Delete Department',
  props<{ id: string }>()
);

export const deleteDepartments = createAction(
  '[Department/API] Delete Departments',
  props<{ ids: string[] }>()
);

export const clearDepartments = createAction(
  '[Department/API] Clear Departments'
);

export const loadDepartmentsFailure = createAction(
  '[Department/API] Clear Vacations',
  props<{ error }>()
);

*/