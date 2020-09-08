import { VacationsFullComponent } from './components/vacations-full/vacations-full.component';
import { VacationsFormComponent } from './components/vacations-form/vacations-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacationsPageComponent } from './components/vacations-page/vacations-page.component';
import { MyVacationsPageComponent } from './components/my-vacations-page/my-vacations-page.component';

const routes: Routes = [
  { path: '', component: VacationsPageComponent },
  { path: 'moje', component: MyVacationsPageComponent },
  { path: 'zgloszenie_urlopu', component: VacationsFormComponent },
  { path: 'pelne', component: VacationsFullComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationsRoutingModule { }
