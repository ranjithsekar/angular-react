import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(e => e.HomeModule)
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
    providers: [PathLocationStrategy]
})
export class AppRoutesModule {

}
