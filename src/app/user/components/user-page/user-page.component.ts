import { Component, OnInit } from '@angular/core';
import { State } from './../../../store';
import { User } from './../../../core/model/user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Selectors from '../../../store/selectors';
import * as UserAction from '../../../store/actions';
import { tap } from 'rxjs/operators';
import { BottomSheetAlertComponent } from '../../../shared/material/bottomsheet/bottom-sheet-alert.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
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
  }

  ngOnInit(): void {
    this.store.dispatch(UserAction.enter());
  }

}
