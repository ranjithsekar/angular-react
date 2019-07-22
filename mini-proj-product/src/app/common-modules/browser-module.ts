import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    exports: [
        BrowserAnimationsModule,
        BrowserModule
    ]
})
export class MyBrowserModule { }