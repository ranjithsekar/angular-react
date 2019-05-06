import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropertyBindingComponent } from '../binding-property/property-binding.component';
import { EventBindingComponent } from '../binding-event/event-binding.component';
import { TwoWayBindingComponent } from '../binding-two-way/two-way-binding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
