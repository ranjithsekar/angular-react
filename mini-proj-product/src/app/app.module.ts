import { MyMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  imports: [MyMaterialModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, AddComponent, ViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
