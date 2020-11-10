import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructurePageComponent } from './components/structure-page/structure-page.component';


const routes: Routes = [
  { path: '', component: StructurePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
