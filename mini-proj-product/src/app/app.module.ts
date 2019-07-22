import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';

import { MyMaterialModule } from './common-modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { MyBrowserModule } from './common-modules/browser-module';

@NgModule({
  imports: [MyMaterialModule, MyBrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, AddComponent, ViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
