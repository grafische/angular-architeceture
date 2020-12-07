import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesSharedModule } from './../directives-shared/directives-shared.module';
import { MaterialModule } from './../material/material.module';
import { NgBootstrapModule } from './../ng-bootstrap/ng-bootstrap.module';
import { FloorComponent } from './floor/floor.component';
import { LinkWorkerTooltipComponent } from './link-worker-tooltip/link-worker-tooltip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FloorComponent, LinkWorkerTooltipComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgBootstrapModule,
    DirectivesSharedModule
  ],
  exports: [
    FloorComponent,
    LinkWorkerTooltipComponent
  ]
})
export class ComponentsSharedModule { }
