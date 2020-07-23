import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmapleRoutingModule } from './smaple-routing.module';
import { SmapleComponent } from './smaple.component';
import { StoreModule } from '@ngrx/store';
import * as fromSmaple from './state/reducers/smaple.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SmapleEffects } from './state/effects/smaple.effects';


@NgModule({
  declarations: [SmapleComponent],
  imports: [
    CommonModule,
    SmapleRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromSmaple.smaplesFeatureKey, fromSmaple.reducer),
    EffectsModule.forFeature([SmapleEffects])
  ]
})
export class SmapleModule { }
