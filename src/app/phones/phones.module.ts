import { MaterialModule } from './../shared/material/material.module';
import { PipesSharedModule } from './../shared/pipes-shared/pipes-shared.module';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { ComponentsSharedModule } from './../shared/components-shared/components-shared.module';
import { NgBootstrapModule } from './../shared/ng-bootstrap/ng-bootstrap.module';
import { VacationEffects } from '../store/effects/vacation.effects';
import { DepartmentUserEffects } from '../store/effects/department-user.effects';
import { DepartmentEffects } from '../store/effects/department.effects';
import { PhonesRoutingModule } from './phones-routing.module';
import { PhonesPageComponent } from './components/phones-page/phones-page.component';
import { PhonesTableFloorComponent } from './components/phones-table-floor/phones-table-floor.component';
import { PhonesTableFloorsComponent } from './components/phones-table-floors/phones-table-floors.component';
import { FloorPipe } from './pipes/floor.pipe';

@NgModule({
  declarations: [PhonesPageComponent, PhonesTableFloorComponent, PhonesTableFloorsComponent, FloorPipe],
  imports: [
    SharedModule,
    NgBootstrapModule,
    ComponentsSharedModule,
    PipesSharedModule,
    PhonesRoutingModule,
    EffectsModule.forFeature([
      VacationEffects,
      DepartmentEffects,
      DepartmentUserEffects
    ])
  ]
})
export class PhonesModule { }
