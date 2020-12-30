import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsRoute from '../../../store/selectors/route.selectors';
import { RoomType } from './../../../core/enum/room-type.enum';
import { Days, RangeDaysWorking } from '../../../core/enum/days.enum';
import { User } from './../../../core/model/user.model';
import { State } from './../../../store';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.scss']
})
export class CardsDetailComponent implements OnInit {

  route$: Observable<any>;
  routeParam$: Observable<any>;
  departmentEmployee$: Observable<User>;
  departmentEmployeesPhoneRoom$: Observable<User[]>;
  departmentAll$: Observable<any>;
  days = Days;
  rangeDaysWorking = RangeDaysWorking;
  roomType = RoomType;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    //this.departmentAll$ = this.store.select(SelectorsDepartmentUsers.selectCardDepartmentUser);
    this.route$ = this.store.select(SelectorsRoute.selectRouteParams);
    //this.routeParam$ = this.store.select(SelectorsRoute.selectSelectedCardDepartment);
    this.departmentEmployee$ = this.store.select(SelectorsDepartmentUsers.selectEmployeeDepartmentUser);
    this.departmentEmployeesPhoneRoom$ = this.store.select(SelectorsDepartmentUsers.selectEmployeeRoomPhoneDepartmentUsers);
  }

}
