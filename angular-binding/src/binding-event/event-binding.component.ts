import { Component, OnInit } from '@angular/core';

@Component({
  selector: "event-binding",
  templateUrl: "./event-binding.component.html",
  providers:[]
})
export class EventBindingComponent implements OnInit {

  morning(event) {
    alert("Good Morning!!!");
  }

  evening(event) {
    alert("Good Evening!!");
  }

  ngOnInit() {

  }
}