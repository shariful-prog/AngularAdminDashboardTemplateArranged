import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';

import { SharedVariable } from './_helpers/shared-variable';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JWTTokenService } from './_helpers/jwt-token.service';
import { DemoComponent } from './admin-component/demo/demo.component';
import { Demo2Component } from './admin-component/demo2/demo2.component';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './authentication/not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, DemoComponent, Demo2Component, NotFoundComponent],
    imports: [
        BrowserModule
        , ReactiveFormsModule
        , BrowserAnimationsModule
        ,ToastrModule.forRoot({toastClass: 'toast toast-bootstrap-compatibility-fix'})
        , AppRoutingModule
        , HttpClientModule
        , AuthLayoutModule
        , AdminLayoutModule
    ],
    providers: [
        SharedVariable
        , JWTTokenService
        , { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
        , { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
