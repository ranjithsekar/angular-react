import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RandomComponent } from '../providers/random.component';
import { GreetingComponent } from '../provide-din/greeting.component';
import { CalcComponent } from '../provided-in/calc.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RandomComponent, GreetingComponent, CalcComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
