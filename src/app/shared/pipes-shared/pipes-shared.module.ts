import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatUserPipe } from './flat-user.pipe';



@NgModule({
  declarations: [FlatUserPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FlatUserPipe
  ]
})
export class PipesSharedModule { }
