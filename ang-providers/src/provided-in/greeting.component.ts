import { Component, OnInit } from '@angular/core';

import { GreetingService } from './greeting.service';

@Component({
  selector: 'greeting',
  template: '<h4>Provided In[root] Example: </h4>Message: {{message}}',
  providers: []
})
export class GreetingComponent implements OnInit {
  message: any;  

  constructor(
    private greetingService: GreetingService
  ) { }

  ngOnInit() {
    this.message = this.greetingService.morning();
  }
}