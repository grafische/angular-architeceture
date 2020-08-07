import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('./smaple/smaple.module').then(m => m.SmapleModule)
  },
  { path: 'urlopy', loadChildren: () => import('./vacations/vacations.module').then(m => m.VacationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
