import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { <%= classify(name) %> } from './../../core/model/<%= dasherize(name) %>.model';
import * as <%= classify(name) %>Actions from '../actions/<%= dasherize(name) %>.actions';

export const <%= classify(name) %>sFeatureKey = '<%= classify(name) %>s';

export interface State extends EntityState<<%= classify(name) %>> {
  // additional entities state properties
  error: Error;
}

export function select<%= classify(name) %>Id(a: <%= classify(name) %>): number {
  //In this case this would be optional since primary key is id
  return a.id;
}


export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: select<%= classify(name) %>Id,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});


export const reducer = createReducer(
  initialState,
  on(<%= classify(name) %>Actions.add<%= classify(name) %>,
    (state, action) => adapter.addOne(action.<%= camelize(name) %>, state)
  ),
  on(<%= classify(name) %>Actions.upsert<%= classify(name) %>,
    (state, action) => adapter.upsertOne(action.<%= camelize(name) %>, state)
  ),
  on(<%= classify(name) %>Actions.add<%= classify(name) %>s,
    (state, action) => adapter.addMany(action.<%= camelize(name) %>s, state)
  ),
  on(<%= classify(name) %>Actions.upsert<%= classify(name) %>s,
    (state, action) => adapter.upsertMany(action.<%= camelize(name) %>s, state)
  ),
  on(<%= classify(name) %>Actions.update<%= classify(name) %>,
    (state, action) => adapter.updateOne(action.<%= camelize(name) %>, state)
  ),
  on(<%= classify(name) %>Actions.update<%= classify(name) %>s,
    (state, action) => adapter.updateMany(action.<%= camelize(name) %>s, state)
  ),
  on(<%= classify(name) %>Actions.delete<%= classify(name) %>,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(<%= classify(name) %>Actions.delete<%= classify(name) %>s,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(<%= classify(name) %>Actions.load<%= classify(name) %>s,
    (state, action) => adapter.setAll(action.<%= camelize(name) %>s, state)
  ),
  on(<%= classify(name) %>Actions.clear<%= classify(name) %>s,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
