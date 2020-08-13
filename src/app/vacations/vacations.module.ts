import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationsRoutingModule } from './vacations-routing.module';
import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';
import { EffectsModule } from '@ngrx/effects';
import { VacationEffects } from '../store/effects/vacation.effects';
import { VacationsListComponent } from './components/vacations-list/vacations-list.component';
import { DepartmentEffects } from '../store/effects/department.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VacationsPageComponent, VacationsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    VacationsRoutingModule,
    EffectsModule.forFeature([VacationEffects, DepartmentEffects]),
    MaterialModule
  ]
})
export class VacationsModule { }
