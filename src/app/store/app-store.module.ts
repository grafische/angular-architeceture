import { UserEffects } from './effects/user.effects';
import { DataUserService } from './services/data-user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './';
import * as reducerUser from './reducers/user.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(reducerUser.userFeatureKey, reducers.users),
    EffectsModule.forFeature([ UserEffects ])
  ],
  providers: [
    DataUserService
  ],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule { }

