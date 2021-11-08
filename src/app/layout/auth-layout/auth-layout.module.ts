import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';

import { LoginComponent } from '../../authentication/login/login.component';
import { RegistrationComponent } from '../../authentication/registration/registration.component';
import { ForgotPasswordComponent } from '../../authentication/forgot-password/forgot-password.component';



@NgModule({
    declarations: [
        AuthLayoutComponent
        , RegistrationComponent
        , LoginComponent
        , ForgotPasswordComponent
    ],
    imports: [
        CommonModule
        , ReactiveFormsModule
        , AuthLayoutRoutingModule
    ]
})
export class AuthLayoutModule { }
