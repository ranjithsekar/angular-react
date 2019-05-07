import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewStudentsComponent } from './student/view-students.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ViewStudentsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
