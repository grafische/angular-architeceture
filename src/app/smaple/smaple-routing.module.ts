import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmapleComponent } from './smaple.component';

const routes: Routes = [
  { path: '', component: SmapleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmapleRoutingModule { }
