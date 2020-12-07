import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorMapsDirective } from './floor-maps.directive';



@NgModule({
  declarations: [FloorMapsDirective],
  imports: [
    CommonModule
  ],
  exports: [
    FloorMapsDirective
  ]
})
export class DirectivesSharedModule { }
