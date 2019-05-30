import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { StudentsViewComponent } from './view/students-view.component';
import { StudentsAddComponent } from './add/students-add.component';

const appRoutes: Routes = [
  { path: 'view', component: StudentsViewComponent },
  { path: 'add', component: StudentsAddComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BsDatepickerModule.forRoot()],
  declarations: [AppComponent, StudentsViewComponent, StudentsAddComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
