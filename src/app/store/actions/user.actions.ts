import { User } from './../../core/model/user';
import { createAction, props } from '@ngrx/store';

export const getUser = createAction(
  '[User] Get User',
  props<{ userId: number }>()
);

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: User[] }>()
);

export const addUsers = createAction('[User/API] Add Users', props<{ user: User[] }>());

export const loadUsersFailure = createAction(
  '[User] Get User Failure'
);


// export class GetCustomer implements Action {
//   readonly type = GET_CUSTOMER;
//   constructor(public readonly payload: number) {}
// }

// export class GetCustomerSuccess implements Action {
//   readonly type = GET_CUSTOMER_SUCCESS;
//   constructor(public readonly payload: Customer) {}
// }

// export class GetCustomerError extends CustomerErrorAction {
//   readonly type = GET_CUSTOMER_ERROR;
// }
