import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, MaterialModule ],
  exports: [ ReactiveFormsModule, CommonModule, FormsModule, MaterialModule ],
  declarations: [  ]
})
export class SharedModule { }
