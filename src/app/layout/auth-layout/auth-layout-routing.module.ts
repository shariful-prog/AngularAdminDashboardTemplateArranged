import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from 'src/app/authentication/registration/registration.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { ForgotPasswordComponent } from 'src/app/authentication/forgot-password/forgot-password.component';
import { AuthLayoutComponent } from './auth-layout.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: '', component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
