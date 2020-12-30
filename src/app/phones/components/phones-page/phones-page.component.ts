import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { FloorType } from './../../../core/enum/floor-type.enum';
import { FloorsName } from './../../../core/enum/floors-name.enum';
import { User } from './../../../core/model/user.model';
import { State } from './../../../store';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {

  departmenSelecttUser$: Observable<User[]>;
  floorType = FloorType;
  floorName = FloorsName;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.departmenSelecttUser$ = this.store.select(SelectorsDepartmentUsers.getDepartmentSelectUsers);
  }

}
