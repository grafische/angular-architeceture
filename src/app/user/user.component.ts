import { State } from './../store';
//import { EntityState } from './../store/reducers/index';
import { User } from './../core/model/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Selectors from '../store/selectors';
import * as UserAction from '../store/actions';
import { tap } from 'rxjs/operators';
import { BottomSheetAlertComponent } from '../shared/material/bottomsheet/bottom-sheet-alert.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User[]>;
  userId$: Observable<string[] | number[] >;
  userE$: Observable<any>;
  errorMessage$: Observable<Error>


  constructor(private store: Store<State>, private _bottomSheet: MatBottomSheet ) {
    this.user$ = store.select(Selectors.selectAllUser);
    this.errorMessage$ = store.select(Selectors.getErrorUser).pipe(
      tap(
        val => {
          if( val != null ) {  this._bottomSheet.open(BottomSheetAlertComponent, {
            data: { message: val.message },
            panelClass: "alert-error"
          });
          }
        }
      )
    );
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
