import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [ // component, directives & pipes
    AppComponent,
    HomeComponent
  ],
  imports: [ //
    BrowserModule, FormsModule, HttpClientModule, ProductModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // atleast 1 component
})
export class AppModule { }
