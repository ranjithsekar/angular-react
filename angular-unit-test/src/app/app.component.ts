import { CalcService } from './calc/calc.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CalcService]
})
export class AppComponent {
  title = 'angular-unit-test';

  constructor(private calcService: CalcService) { }

  addOutput = this.calcService.add(4, 4);

}
