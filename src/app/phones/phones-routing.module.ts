import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesPageComponent } from './components/phones-page/phones-page.component';


const routes: Routes = [
  { path: '', component: PhonesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
