import { PreloaderStructureResolver } from './structure/resolver/preloader-structure.resolver';
import { PreloaderResolver } from './vacations/resolver/preloader.resolver';
import { PreloaderCardsResolver } from './cards/resolver/preloader-cards.resolver';
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
  canActivate: [AuthGuard],
  resolve: { data: PreloaderResolver }
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'wizytowki',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
    canActivate: [AuthGuard],
    resolve: { data: PreloaderCardsResolver }
  },
  {
    path: 'struktura_firmy',
    loadChildren: () => import('./structure/structure.module').then(m => m.StructureModule),
    canActivate: [AuthGuard],
    resolve: { data: PreloaderStructureResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
