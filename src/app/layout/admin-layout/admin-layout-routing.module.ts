import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/admin-component/dashboard/dashboard.component';
import { DemoComponent } from 'src/app/admin-component/demo/demo.component';
import { Demo2Component } from 'src/app/admin-component/demo2/demo2.component';
import { NotFoundComponent } from 'src/app/authentication/not-found/not-found.component';
import { AdminLayoutComponent } from './admin-layout.component';


const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: '', component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'demo', component: DemoComponent },
            { path: 'demo2', component: Demo2Component },
            { path: '**', component: NotFoundComponent }
        ],
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
