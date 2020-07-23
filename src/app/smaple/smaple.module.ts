import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmapleRoutingModule } from './smaple-routing.module';
import { SmapleComponent } from './smaple.component';


@NgModule({
  declarations: [SmapleComponent],
  imports: [
    CommonModule,
    SmapleRoutingModule
  ]
})
export class SmapleModule { }
