import { tap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DepartmentUserActions from '../../../store/actions/department-user.actions';
import * as SelectorsDepartmentUsers from '../../../store/selectors/department-user.selectors';
import { daysWorking } from './../../../core/const/days-working.const';
import { structure } from './../../../core/const/structure.const';
import { Days } from './../../../core/model/days.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { Department } from './../../../core/model/department.model';
import { ErrorInformation, InvalidFields } from './../../../core/model/error-Information.model';
import { FormMode } from './../../../core/model/form-mode.enum';
import { Message } from './../../../core/model/message.enum';
import { User, UserWorkingHours } from './../../../core/model/user.model';
import { State } from './../../../store';


@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  @Input() mode: FormMode;
  @Input() set departmentEmployee(data: DepartmentUser) {
    if (data) {
      this.__departmentUser = data;
      this.cardForm.patchValue({
        id: data.id,
        name: data.name,
        shortName: data.shortName,
        symbol: data.symbol
      });
      this.addEmployees(data.employees);
    }
  }
  get departmentEmployee() {
    return this.__departmentUser;
  }
  @Input() dataEmployee: User;
  @Input() allEmployees: User[];

  @Input() departments: Department[];
  @Input() departmentsUser: DepartmentUser[];

  private __departmentUser: DepartmentUser;
  Error$: Observable<ErrorInformation>;
  ErrorInvalids$: Observable<InvalidFields[]>;

  days = Days;
  daysArray: Array<any>;
  formMode = FormMode;
  message = Message;
  formValid: Boolean = true;
  typeLevel = structure;

  cardForm = this.fb.group({
    id: [null],
    name: [null],
    shortName: [null],
    symbol: [null],
    employees: this.fb.array([])
  });


  ngOnInit() {
    this.Error$ = this.store.select(SelectorsDepartmentUsers.getErrorDepartmentUser).pipe(
      tap({
        next: (value: ErrorInformation) => {
          if(value?.error?.invalidFields) {
            value.error.invalidFields.forEach( invalidField => {

              return this.empoloyeesForm.at(0).get(invalidField.field).setErrors({ [invalidField.field + 'Backend']: true });
            });
          }
          //this.empoloyeesForm.at(0).get(value.error.invalidFields).setErrors({ afterSubmit: true });
        }
      })
    );
    this.ErrorInvalids$ = this.store.select(SelectorsDepartmentUsers.getErrorDepartmentUserInvalidField);
    this.daysArray = this.daysToArray();
    if (this.mode === this.formMode.ADD) {
      this.empoloyeesForm.push(this.employeeForm());
      this.addDayHours(daysWorking, 0);
    }
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
  ) { }

  findInvalidControls() {
    const invalid = [];
    const controls = this.cardForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }

    return invalid;
  }

  departmentCategoryChange(ev: any, i: number) {
    this.empoloyeesForm.at(i).get('departmentName').setValue(ev.source.selected.viewValue);
  }

  onSubmit() {
    if(!this.cardForm.invalid) {
      this.formValid = true;

      if (this.mode === this.formMode.UPGRADE) {
        const users: User[] = this.empoloyeesForm.value;
        const user: User = users.filter(user => user.login === this.dataEmployee.login)[0];
        const departmentUser = { id: this.__departmentUser.id, changes: this.cardForm.value };
        this.store.dispatch(DepartmentUserActions.updateDepartmentUser({ departmentUser, user }));
      }

      if (this.mode === this.formMode.ADD) {

        const departmentIdNewUser = this.empoloyeesForm.at(0).value.departmentId;
        const selectDepartmentUser = this.departmentsUser.filter(department => department.id === departmentIdNewUser)[0];
        this.cardForm.patchValue({
          id: selectDepartmentUser.id,
          name: selectDepartmentUser.name,
          shortName: selectDepartmentUser.shortName,
          symbol: selectDepartmentUser.symbol,
        });
        selectDepartmentUser.employees.forEach(
          user => this.empoloyeesForm.push(this.employeeForm(user))
        );

        const departmentUser = { id: departmentIdNewUser, changes: this.cardForm.value };
        const user = this.empoloyeesForm.at(0).value;
        this.store.dispatch(DepartmentUserActions.addOneDepartmentUser({ departmentUser, user }));

      }
    } else {
      this.formValid = false;
    }
  }

  addEmployees(employees: User[]) {
    employees.forEach((employee, idx) => {
      this.empoloyeesForm.push(this.employeeForm(employee));
      this.addDayHours(employee.workingHours, idx);
    });
  }

  addDayHours(workDays: UserWorkingHours[], idx: number) {
    this.empoloyeeHoursForm(idx).clear();
    workDays.forEach(workDay => this.empoloyeeHoursForm(idx).push(this.hoursForm(workDay)));
  }

  addDayHour(idx: number) {
    this.empoloyeeHoursForm(idx).push(this.hoursForm());
  }

  sethoursForm(workDays: UserWorkingHours[]) {
    workDays.forEach(
      workDay => this.fb.group({
        dayOfWeek: workDay.dayOfWeek,
        endHour: workDay.endHour,
        id: workDay.id,
        startHour: workDay.startHour
      })
    );
  }

  removeDayHours(idxGroup: number, idxHour: number) {
    return this.empoloyeeHoursForm(idxGroup).removeAt(idxHour);
  }

  hoursForm(workDay?: UserWorkingHours): FormGroup {
    if (workDay) {
      return this.fb.group({
        dayOfWeek: workDay.dayOfWeek || null,
        endHour: workDay.endHour || null,
        id: workDay.id || null,
        startHour: workDay.startHour || null
      });
    } else {
      return this.fb.group({
        dayOfWeek: null,
        endHour: null,
        id: null,
        startHour: null
      });

    }
  }

  employeeForm(user?: User): FormGroup {
    return this.fb.group({
      departmentId: [user?.departmentId || null, Validators.required],
      departmentName: [user?.departmentName || null, Validators.required],
      email: [user?.email, Validators.required] || [null, Validators.required],
      supervisorId: [user?.supervisorId, Validators.required] || [null, Validators.required],
      supervisorName: user?.supervisorName || null,
      level: [user?.level, Validators.required] || [null, Validators.required],
      login: [user?.login, Validators.required] || [null, Validators.required],
      name: [user?.name, Validators.required] || [null, Validators.required],
      surname: [user?.surname, Validators.required] || [null, Validators.required],
      nickname: user?.nickname || null,
      position: user?.position || null,
      room: [user?.room, Validators.required] || [null, Validators.required],
      phoneNumber: user?.phoneNumber || null,
      mobilePhoneNumber: user?.mobilePhoneNumber || null,
      extensionNumber: user?.extensionNumber || null,
      communicatorNumber: user?.communicatorNumber || null,
      wwwAddress: user?.wwwAddress || null,
      birthday: user?.birtday || null,
      nameday: user?.nameday || null,
      workingHours: this.fb.array([
        this.fb.group({
          dayOfWeek: null,
          endHour: null,
          id: null,
          startHour: null
        })
      ]),
      former: user?.former || null,
      id: user?.id || null,
      photoUrl: user?.phoneNumber || null,
      roles: user?.roles || null,
    });
  }

  get empoloyeesForm(): FormArray {
    return this.cardForm.get('employees') as FormArray;
  }

  empoloyeeHoursForm(idx: number): FormArray {
    return this.empoloyeesForm.at(idx).get('workingHours') as FormArray;
  }

  daysToArray(): Array<any> {

    return Object.keys(this.days)
      .map(key => {
        return {
          id: key,
          name: this.days[key]
        }
      });
  }
}
