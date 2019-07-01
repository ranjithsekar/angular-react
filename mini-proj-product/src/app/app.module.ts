import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddComponent, ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
