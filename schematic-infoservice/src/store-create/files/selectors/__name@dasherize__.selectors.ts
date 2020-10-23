import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './../';
import * as from<%= classify(name) %> from '../reducers/<%= dasherize(name) %>.reducer';


export const select<%= classify(name) %>sState = (state: State) => state.<%= camelize(name) %>s;
export const selectAll<%= classify(name) %> = createSelector(
  select<%= classify(name) %>sState,
  from<%= classify(name) %>.selectAll
);

export const getError<%= classify(name) %> = createSelector(
  select<%= classify(name) %>sState,
  state => state.error
);
