import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, NgxMaterialTimepickerModule.setLocale('pl-PL') ],
  exports: [ ReactiveFormsModule, CommonModule, FormsModule, MaterialModule, NgxMaterialTimepickerModule ],
  declarations: [  ]
})
export class SharedModule { }
