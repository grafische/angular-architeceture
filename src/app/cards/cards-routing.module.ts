import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPageComponent } from './components/cards-page/cards-page.component';
import { CardsDetailComponent } from './components/cards-detail/cards-detail.component';
import { CardsEditComponent } from './components/cards-edit/cards-edit.component';

const routes: Routes = [
  { path: '', component: CardsPageComponent },
  { path: 'edytuj/:login', component: CardsEditComponent },
  { path: ':department/:login', component: CardsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
