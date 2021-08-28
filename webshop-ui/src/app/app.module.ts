import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SearchResultComponent
  ],
  imports: [
    BrowserModule, AppRoutesModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
