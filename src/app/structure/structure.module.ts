import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { DepartmentUserEffects } from '../store/effects/department-user.effects';
import { DepartmentEffects } from '../store/effects/department.effects';
import { VacationEffects } from '../store/effects/vacation.effects';
import { StructureBoardComponent } from './components/structure-board/structure-board.component';
import { StructureDepartmentManagerComponent } from './components/structure-department-manager/structure-department-manager.component';
import { StructureDirectorComponent } from './components/structure-director/structure-director.component';
import { StructurePageComponent } from './components/structure-page/structure-page.component';
import { StructureViceDirectorComponent } from './components/structure-vice-director/structure-vice-director.component';
import { StructureWorkerSubComponent } from './components/structure-worker-sub/structure-worker-sub.component';
import { StructureWorkerComponent } from './components/structure-worker/structure-worker.component';
import { FilterDirectorsPipe } from './pipes/filter-directors.pipe';
import { FilterSupervisorPipe } from './pipes/filter-supervisor.pipe';
import { FilterWorkersPipe } from './pipes/filter-workers.pipe';
import { FlatDirectorsPipe } from './pipes/flat-directors.pipe';
import { FlatUsersPipe } from './pipes/flat-users.pipe';
import { StructureRoutingModule } from './structure-routing.module';


@NgModule({
  declarations: [StructurePageComponent, StructureBoardComponent, StructureDirectorComponent, StructureViceDirectorComponent, StructureDepartmentManagerComponent, StructureWorkerComponent, FilterSupervisorPipe, FilterWorkersPipe, FilterDirectorsPipe, FlatDirectorsPipe, FlatUsersPipe, StructureWorkerSubComponent],
  imports: [
    SharedModule,
    StructureRoutingModule,
    EffectsModule.forFeature([
      VacationEffects,
      DepartmentEffects,
      DepartmentUserEffects
    ]),
    NgbPopoverModule
  ]
})
export class StructureModule { }
