import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { DepartmentUserEffects } from '../store/effects/department-user.effects';
import { DepartmentEffects } from '../store/effects/department.effects';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsDepartmentComponent } from './components/cards-department/cards-department.component';
import { CardsDetailComponent } from './components/cards-detail/cards-detail.component';
import { CardsEditComponent } from './components/cards-edit/cards-edit.component';
import { CardsEmployeesComponent } from './components/cards-employees/cards-employees.component';
import { CardsFormComponent } from './components/cards-form/cards-form.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsPageComponent } from './components/cards-page/cards-page.component';
import { CardsEmployeeFilterPipe } from './pipes/cards-employee-filter.pipe';
import { CardsFilterPipe } from './pipes/cards-filter.pipe';


@NgModule({
  declarations: [CardsPageComponent, CardsListComponent, CardsDepartmentComponent, CardsEmployeesComponent, CardsFilterPipe, CardsEmployeeFilterPipe, CardsDetailComponent, CardsFormComponent, CardsEditComponent],
  imports: [
    SharedModule,
    CardsRoutingModule,
    EffectsModule.forFeature([
      DepartmentEffects,
      DepartmentUserEffects
    ])
  ]
})
export class CardsModule { }
