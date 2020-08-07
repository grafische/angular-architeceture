import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';

const routes: Routes = [{ path: '', component: VacationsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationsRoutingModule { }
