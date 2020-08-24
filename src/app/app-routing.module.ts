import { AuthGuard } from './core/auth/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/auth/components/login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/urlopy' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('./smaple/smaple.module').then(m => m.SmapleModule)
  },
  { path: 'urlopy',
  loadChildren: () => import('./vacations/vacations.module').then(m => m.VacationsModule),
  canActivate: [AuthGuard]
},
{ path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
