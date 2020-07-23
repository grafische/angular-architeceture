import { Action, createReducer, on } from '@ngrx/store';
import * as SmapleActions from '../actions/smaple.actions';

export const smapleFeatureKey = 'smaple';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SmapleActions.loadSmaples, state => state),
  on(SmapleActions.loadSmaplesSuccess, (state, action) => state),
  on(SmapleActions.loadSmaplesFailure, (state, action) => state),

);

