import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { HeaderListMenuComponent } from './components/header-list-menu/header-list-menu.component';
import { MaterialModule } from '../shared/material/material.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [HeaderPageComponent, HeaderListMenuComponent, HeaderUserComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderPageComponent, HeaderListMenuComponent]
})
export class HeaderModule { }
