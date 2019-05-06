import { Component, OnInit } from '@angular/core';

import { CalcService } from './calc.service';
import { Logger } from '../log/logger.service';

@Component({
  selector: 'calc',
  template: '<h4>Provided In[service] Example: </h4>Sum(3,3): {{sum}}',
  providers: [CalcService]
})
export class CalcComponent implements OnInit {
  sum: number;

  constructor(
    private calcService: CalcService,
    private log: Logger
  ) { }

  ngOnInit() {
    this.sum = this.calcService.add(3, 3);
    this.log.info('Sum Value is: ' + this.sum);
  }

}