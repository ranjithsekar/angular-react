import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, AddComponent, ViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
