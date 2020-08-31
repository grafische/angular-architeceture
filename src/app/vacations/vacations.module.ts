import { DepartmentUserEffects } from './../store/effects/department-user.effects';
import { VacationTypeEffects } from './../store/effects/vacation-type.effects';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationsRoutingModule } from './vacations-routing.module';
import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';
import { EffectsModule } from '@ngrx/effects';
import { VacationEffects } from '../store/effects/vacation.effects';
import { VacationsListComponent } from './components/vacations-list/vacations-list.component';
import { DepartmentEffects } from '../store/effects/department.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyVacationsPageComponent } from './components/my-vacations-page/my-vacations-page.component';
import { VacationsFormComponent } from './components/vacations-form/vacations-form.component';

@NgModule({
  declarations: [VacationsPageComponent, VacationsListComponent, MyVacationsPageComponent, VacationsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VacationsRoutingModule,
    EffectsModule.forFeature([VacationEffects, DepartmentEffects, DepartmentUserEffects, VacationTypeEffects]),
    MaterialModule
  ]
})
export class VacationsModule { }
