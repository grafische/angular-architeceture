import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';


@NgModule({
  declarations: [UserRoutingModule.components],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
