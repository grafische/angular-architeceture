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
