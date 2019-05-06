import { Injectable } from '@angular/core';

import { CalcComponent } from './calc.component';

@Injectable({
  providedIn: CalcComponent
})
export class CalcService {
  add(a: number, b: number) {
    return a + b;
  }
}
