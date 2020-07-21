import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [UserRoutingModule.components],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
