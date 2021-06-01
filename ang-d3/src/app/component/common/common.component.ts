import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init');

    const value = 528420;
    let tickValues = [];

    var wholeNum: String = "";
    var remainNum: String = "";

    String(value)
      .split("")
      .forEach((e, i) => {
        if (i === 0) {
          wholeNum = wholeNum + e;
        } else {
          remainNum = remainNum + e;
          wholeNum = wholeNum + String(0);
        }
      });
    console.log("wholeNum " + wholeNum);
    console.log("remainNum " + remainNum);

    let result = Number(wholeNum) / 4;
    console.log("result: " + result);
    let tickVal = 0;

    for (let i = 1; i <= 4; i++) {
      tickVal = tickVal + result;
      tickValues.push(tickVal);
    }
    tickValues.push(value);
    console.log("init out " + tickValues);

  }

}
