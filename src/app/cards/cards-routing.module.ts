import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsAddComponent } from './components/cards-add/cards-add.component';
import { CardsDetailComponent } from './components/cards-detail/cards-detail.component';
import { CardsEditComponent } from './components/cards-edit/cards-edit.component';
import { CardsPageComponent } from './components/cards-page/cards-page.component';


const routes: Routes = [
  { path: '', component: CardsPageComponent },
  { path: 'dodaj', component: CardsAddComponent },
  { path: 'edytuj/:login', component: CardsEditComponent },
  { path: ':department/:login', component: CardsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
