import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HttpClientModule } from '@angular/common/http';
import { OnboardingComponent } from './onboarding/onboarding.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})
export class AuthModule { }
