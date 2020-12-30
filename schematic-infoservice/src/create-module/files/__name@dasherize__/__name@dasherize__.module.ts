import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ComponentsSharedModule } from './../shared/components-shared/components-shared.module';
import { NgBootstrapModule } from './../shared/ng-bootstrap/ng-bootstrap.module';
import { VacationEffects } from '../store/effects/vacation.effects';
import { DepartmentUserEffects } from '../store/effects/department-user.effects';
import { DepartmentEffects } from '../store/effects/department.effects';
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>PageComponent } from './components/<%= dasherize(name) %>-page/<%= dasherize(name) %>-page.component';

@NgModule({
  declarations: [<%= classify(name) %>PageComponent],
  imports: [
    SharedModule,
    NgBootstrapModule,
    ComponentsSharedModule,
    <%= classify(name) %>RoutingModule,
    EffectsModule.forFeature([
      VacationEffects,
      DepartmentEffects,
      DepartmentUserEffects
    ])
  ]
})
export class <%= classify(name) %>Module { }
