import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowProductComponent } from './component/show-product/show-product.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    EditProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
