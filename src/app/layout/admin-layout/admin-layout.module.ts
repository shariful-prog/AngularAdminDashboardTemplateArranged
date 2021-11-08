import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';

import { SidebarComponent } from '../../_shared/sidebar/sidebar.component';
import { HeaderComponent } from '../../_shared/header/header.component';
import { FooterComponent } from '../../_shared/footer/footer.component';
import { DashboardComponent } from 'src/app/admin-component/dashboard/dashboard.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor } from 'src/app/_intrceptor/token-interceptor.interceptor';
import { MenuItems } from 'src/app/_shared/menu-item';

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
    bgsColor: '#abacad',
    bgsOpacity: 0.5,
    bgsPosition: 'bottom-right',
    bgsSize: 60,
    bgsType: 'ball-spin-clockwise',
    blur: 5,
    delay: 0,
    fastFadeOut: true,
    fgsColor: '#0163ad',
    fgsPosition: 'center-center',
    fgsSize: 60,
    fgsType: 'ball-spin-clockwise',
    gap: 24,
    logoPosition: 'center-center',
    logoSize: 120,
    logoUrl: '',
    masterLoaderId: 'master',
    overlayBorderRadius: '0',
    overlayColor: '#abacad',
    pbColor: '#0163ad',
    pbDirection: 'ltr',
    pbThickness: 3,
    hasProgressBar: false,
    text: '',
    textColor: '#FFFFFF',
    textPosition: 'center-center',
    maxTime: -1,
    minTime: 300
}

@NgModule({
    declarations: [
        AdminLayoutComponent
        , SidebarComponent
        , HeaderComponent
        , FooterComponent
        , DashboardComponent
    ],
    imports: [
        CommonModule
        , AdminLayoutRoutingModule
        , BlockUIModule.forRoot()
        , ToastrModule.forRoot()
        , NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)

        // , NgxUiLoaderHttpModule
        // , NgxUiLoaderRouterModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorInterceptor,
        multi: true
    },
MenuItems
]
})
export class AdminLayoutModule { }
