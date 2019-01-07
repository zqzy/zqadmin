import { NgModule } from '@angular/core';

import {
    RouterModule, Routes,
} from '@angular/router';
const appRoutes: Routes = [
    {
        path: 'user',
        loadChildren: '../app/user-login/user-login.module#UserLoginModule'
    }, {
        path: 'pages',
        loadChildren: '../app/pages/pages.module#PagesModule'
    },

    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: '**', redirectTo:'user' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //   CanDeactivateGuard
    ]
})
export class AppRoutingModule { }

