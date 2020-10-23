import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%= classify(name) %>PageComponent } from './components/<%= dasherize(name) %>-page/<%= dasherize(name) %>-page.component';


const routes: Routes = [
  { path: '', component: <%= classify(name) %>PageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
