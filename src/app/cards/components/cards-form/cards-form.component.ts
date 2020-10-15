import { selectUser } from './../../../store/reducers/auth.reducer';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as DepartmentUserActions from '../../../store/actions/department-user.actions';
import { Days } from './../../../core/model/days.enum';
import { DepartmentUser } from './../../../core/model/department-user.model';
import { Department } from './../../../core/model/department.model';
import { User, UserWorkingHours } from './../../../core/model/user.model';
import { State } from './../../../store';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

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
  @Input() departments: Department[];

  private __departmentUser: DepartmentUser;
  private __selectUser: User;
  days = Object.values(Days);
  daysTest = Days;
  daysArray: Array<any>;

  cardForm = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    shortName: [null, Validators.required],
    symbol: [null, Validators.required],
    employees: this.fb.array([])
  });


  ngOnInit() {
    this.daysArray = this.daysToArray();
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
  ) { }

  onSubmit() {
    const users: User[] = this.empoloyeesForm.value;
    const user: User = users.filter( user => user.login === this.dataEmployee.login)[0];
    const departmentUser = { id: this.__departmentUser.id, changes: this.cardForm.value };
    this.store.dispatch(DepartmentUserActions.updateDepartmentUser({ departmentUser, user }));
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
      email: [user?.email || null, Validators.required],
      supervisorId: user?.supervisorId || null,
      supervisorName: user?.supervisorName || null,
      level: [user?.level, Validators.required] || null,
      login: [user?.login, Validators.required] || null,
      name: [user?.name, Validators.required] || null,
      surname: [user?.surname, Validators.required] || null,
      nickname: user?.nickname || null,
      position: user?.position || null,
      room: user?.room || null,
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

    return Object.keys(this.daysTest)
      .map(key => {
        return {
          id: key,
          name: this.daysTest[key]
        }
      });
  }
}
