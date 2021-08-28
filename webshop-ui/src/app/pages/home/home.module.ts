import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.routes';

@NgModule({
    imports: [HomeRoutesModule, ReactiveFormsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
