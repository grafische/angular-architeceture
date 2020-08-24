import { createAction, props } from '@ngrx/store';

import { User } from '../../core/model/user.model';

export const login = createAction(
  "[Auth/User] Login",
  (username: string, password: string) => ({ username, password })
);

export const logout = createAction("[Auth/User] Logout");

export const getAuthStatusSuccess = createAction(
  "[Auth/User] Get Auth Status Success",
  (user: User | null) => ({ user })
);

export const loginSuccess = createAction(
  "[Auth/User] Login Success",
  (user: User) => ({ user })
);

export const loginFailure = createAction(
  "[Auth/User] Login Failure",
  (reason: string) => ({ reason })
);

export const loginRedirect = createAction('[Auth/User] Login Redirect');
