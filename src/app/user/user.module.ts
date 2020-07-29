import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';


@NgModule({
  declarations: [UserRoutingModule.components, UserPageComponent, UsersListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
