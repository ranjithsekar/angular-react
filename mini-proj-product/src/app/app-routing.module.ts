import { AddComponent } from './components/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: 'products', component: ViewComponent },
  //{ path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
