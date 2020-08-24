import { User } from './../../../model/user.model';
import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "../../../../store";
import {
  selectGettingAuthStatus,
  selectAuthUser,
  selectAuthError
} from "../../../../store/selectors/auth.selectors";
import * as AuthUserActions from "../../../../store/actions/auth.actions";
import { LoginEvent } from "../login-form/login-form.component";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  @Input('sidenav') side: MatSidenav;
  gettingStatus$: Observable<boolean>;
  user$: Observable<User | null>;
  error$: Observable<string | null>;

  constructor(private store: Store<State>) {
    this.gettingStatus$ = store.select(selectGettingAuthStatus);
    this.user$ = store.select(selectAuthUser);
    this.error$ = store.select(selectAuthError);
  }

  onLogin($event: LoginEvent) {
    this.store.dispatch(
      AuthUserActions.login($event.username, $event.password)
    );
  }
}
