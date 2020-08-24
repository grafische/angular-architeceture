import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';
import { MyVacationsPageComponent } from './components/my-vacations-page/my-vacations-page.component';

const routes: Routes = [
  { path: '', component: VacationsPageComponent },
  { path: 'moje', component: MyVacationsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationsRoutingModule { }
