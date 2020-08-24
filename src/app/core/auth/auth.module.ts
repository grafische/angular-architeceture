import { HeaderModule } from './../../header/header.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../shared/material/material.module';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthEffects } from './../../store/effects/auth.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    RouterModule,
    HeaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [LoginPageComponent, LoginFormComponent]
})
export class AuthModule { }
