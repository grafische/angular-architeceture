import { EntityState } from './../store/reducers/index';
import { User } from './../core/model/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectOneUser } from '../store/selectors';
import * as UserAction from '../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<EntityState> ) { }

  ngOnInit(): void {
    this.store.dispatch(UserAction.getUser({ userId: 2 }));
    // this.user$ = this.store.dispatch(UserAction.getUser({userId: 2}));
  }

  getUser() {
    return this.store.select(selectOneUser);
  }

}
