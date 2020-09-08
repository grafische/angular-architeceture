import { DepartmentVacationsEffects } from './../store/effects/department-vacations.effects';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { DepartmentUserEffects } from './../store/effects/department-user.effects';
import { VacationTypeEffects } from './../store/effects/vacation-type.effects';

import { EffectsModule } from '@ngrx/effects';

import { VacationsRoutingModule } from './vacations-routing.module';
import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';
import { VacationEffects } from '../store/effects/vacation.effects';
import { VacationsListComponent } from './components/vacations-list/vacations-list.component';
import { DepartmentEffects } from '../store/effects/department.effects';
import { DepartmentOwnEffects } from '../store/effects/department-own.effects';
import { MyVacationsPageComponent } from './components/my-vacations-page/my-vacations-page.component';
import { VacationsFormComponent } from './components/vacations-form/vacations-form.component';
import { TransformDepartmentOwnPipe } from './pipes/transform-department-own.pipe';
import { NameTypeLeavePipe } from './pipes/name-type-leave.pipe';
import { VacationsFullComponent } from './components/vacations-full/vacations-full.component';
import { VacationsFullDetailsComponent } from './components/vacations-full-details/vacations-full-details.component';

@NgModule({
  declarations: [
    VacationsPageComponent,
    VacationsListComponent,
    MyVacationsPageComponent,
    VacationsFormComponent,
    TransformDepartmentOwnPipe,
    NameTypeLeavePipe,
    VacationsFullComponent,
    VacationsFullDetailsComponent
  ],
  imports: [
    SharedModule,
    VacationsRoutingModule,
    EffectsModule.forFeature([
      VacationEffects,
      DepartmentEffects,
      DepartmentUserEffects,
      VacationTypeEffects,
      DepartmentOwnEffects,
      DepartmentVacationsEffects
    ])

  ]
})
export class VacationsModule { }
