import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./layout/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) }
    , { path: 'admin', loadChildren: () => import('./layout/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) }
    , { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
