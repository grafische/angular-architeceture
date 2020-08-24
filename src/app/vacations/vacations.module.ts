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
import { FormsModule } from '@angular/forms';
import { MyVacationsPageComponent } from './components/my-vacations-page/my-vacations-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [VacationsPageComponent, VacationsListComponent, MyVacationsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    VacationsRoutingModule,
    EffectsModule.forFeature([VacationEffects, DepartmentEffects, VacationTypeEffects]),
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class VacationsModule { }
