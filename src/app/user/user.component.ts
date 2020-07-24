import { State } from './../store';
//import { EntityState } from './../store/reducers/index';
import { User } from './../core/model/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Selectors from '../store/selectors';
import * as UserAction from '../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User[]>;
  userId$: Observable<string[] | number[] >;
  userE$: Observable<any>;


  constructor(private store: Store<State> ) {
    this.user$ = store.select(Selectors.selectAllUser);
    // this.userId$ = store.select(Selectors.selectIds);
    // this.userE$ =store.select(Selectors.selectEntities);
  }

  ngOnInit(): void {
    this.store.dispatch(UserAction.enter());

    // this.user$ = this.store.dispatch(UserAction.getUser({userId: 2}));
  }

  getUser() {
    //this.store.select(Selectors.selectAllUsers);
    //return this.users$ = this.store.select(Selectors.selectUserIds);
  }

}
