import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  componentMessage: string = "This is TwoWayBindingComponent";
  name: string = "BindingExample";
  address: string = "Chennai";
  
  clickMe() {
    alert("clicked me??");
  }

}
