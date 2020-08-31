import { Message } from './../../../core/model/message.enum';
import { Department } from './../../../core/model/department.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './../../../store';
import * as SelectorsVacation from '../../../store/selectors/vacation.selectors';
import * as SelectorsDepartment from '../../../store/selectors/department.selectors';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import * as SelectorsVacationType from '../../../store/selectors/vacation-type.selectors';
import * as SelectorsUser from '../../../store/selectors/auth.selectors';

import * as VacationAction from '../../../store/actions/vacation.actions';
import * as DepartmentAction from '../../../store/actions/department.actions';
import * as DepartmentUsersAction from '../../../store/actions/department-user.actions';
import * as VacationTypeAction from '../../../store/actions/vacation-type.actions';

import { VacationType } from './../../../core/model/vacation-type.model';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { User } from './../../../core/model/user.model';
import { tap } from 'rxjs/operators';
import { Vacation } from 'src/app/core/model/vacation.model';

@Component({
  selector: 'app-vacations-form',
  templateUrl: './vacations-form.component.html',
  styleUrls: ['./vacations-form.component.scss']
})
export class VacationsFormComponent implements OnInit {

  department$: Observable<Department[]>;
  departmentUsers$: Observable<DepartmentUser[]>;
  departmentUser$: Observable<DepartmentUser[]>;
  vacationType$: Observable<VacationType[]>;
  user$: Observable<User>;
  messageErrorAsync: Message = Message.AsyncError;
  isEditable: boolean = false;

  vacationForm_first = this.fb.group({
    contact: [null],
    departmentId: [null, Validators.required],
    departmentName: [null],
    employeeLogin: [null],
    employeeId: [null, Validators.required],
    employeeName: [null],
    endDate: [null, Validators.required],
    startDate: [null, Validators.required],
    leaveId: [null],
    leaveTypeId: [null, Validators.required],
    remarks: [null]
  });

  vacationForm_second = this.fb.group({
    notification_boss: ['false', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
    ) {}

  ngOnInit() {
    // this.store.dispatch(DepartmentAction.enterDepartments());
    // this.store.dispatch(DepartmentUsersAction.enterDepartmentUsers());
    this.vacationType$ = this.store.select(SelectorsVacationType.selectAllVacationType);
    this.department$ = this.store.select(SelectorsDepartment.selectAllDepartment);
    this.departmentUsers$ = this.store.select(SelectorsDepartmentUsers.selectAllDepartmentUser);
    this.departmentUser$ = this.store.select(SelectorsDepartmentUsers.selectOneDepartmentUser, {id: 2});
    this.user$ = this.store.select(SelectorsUser.selectAuthUser).pipe(
      tap(
        val => {
          this.vacationForm_first.patchValue( {
            employeeId: val.id,
            employeeName: `${val.name} ${val.surname}`,
            departmentId: val.departmentId,
            departmentName: val.departmentName
          })
        }
      )
    );
  }

  changeDepartment( ev: any): void {
    console.info("changeDepartment");
    this.vacationForm_first.patchValue( { departmentName:  ev.source.selected.viewValue } )
  }

  changeName( ev: any): void {
    this.vacationForm_first.patchValue( { employeeName:  ev.source.selected.viewValue } )
  }

  getTypeName( id: number, listType: VacationType[] ) {
    return listType.filter(
      (val) => val.id == id
    )[0];
  }

  onSubmit():void {
    const data: Vacation = this.vacationForm_first.value;
    this.store.dispatch(VacationAction.addVacation({vacation: data}));
  }

  filterDepartmentName( id: number ): Observable<DepartmentUser> {
    return this.departmentUser$ = this.store.select(SelectorsDepartmentUsers.selectOneDepartmentUser, {id: id});
  }
}

  // addressForm = this.fb.group({
  //   company: null,
  //   firstName: [null, Validators.required],
  //   lastName: [null, Validators.required],
  //   address: [null, Validators.required],
  //   address2: null,
  //   city: [null, Validators.required],
  //   state: [null, Validators.required],
  //   postalCode: [null, Validators.compose([
  //     Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //   ],
  //   shipping: ['free', Validators.required]
  // });
