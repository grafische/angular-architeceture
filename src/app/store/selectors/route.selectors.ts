import * as fromRouter from '@ngrx/router-store';
import { State } from './../';

export const selectRouteState = (state: State) => state.router;

export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouteState);

export const selectSelectedCardLoginEmloyee = selectRouteParam('login');
export const selectSelectedCardDepartment = selectRouteParam('department');

