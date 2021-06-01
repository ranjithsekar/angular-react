import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from "d3";

import { AppConst } from '../../shared/app-constants';
import { ISalesData } from '../../shared/model/sales-data.model';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.css']
})
export class BarChart1Component implements OnInit {
  private svg;
  private g;
  private xScale;
  private yScale;
  private margin = 50;
  private width = 200;
  private height = 200;

  totalData: ISalesData[] = [];
  private startIndex: number = 0;
  private endIndex: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    confirm
    this.endIndex = this.startIndex + AppConst.chart_increase_decrease_size;
    this.createSvg();
    this.createChart();
  }

  private createChart(): void {
    this.httpClient
      .get("../../../assets/sales-data.json")
      .subscribe((data: ISalesData[]) => {
        data = data.slice(this.startIndex, this.endIndex);
        this.generateBarChart(data);
      });
  }

  private createSvg(): void {
    this.svg = d3
      .select("div#decreaseBtn")
      .append("button")
      .text("Decrease")
      .on("click", (d) => this.decrease());

    this.svg = d3
      .select("div#barchart")
      .append("svg")
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2)
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

    d3.select("div#increaseBtn")
      .append("button")
      .text("Increase")
      .attr("height", 100)
      .on("click", (d) => this.increase());

    this.xScale = d3.scaleBand().range([0, this.width]).padding(0.2);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
    this.svg.append("g").selectAll("text").style("text-anchor", "middle");
  }

  private generateBarChart(data: ISalesData[]): void {
    this.svg.select("g").call(this.xScale).remove();
    this.svg.select("g").call(this.yScale).remove();

    const xAxisNum: Array<ISalesData> = [];

    this.xScale.domain(data.map((d) => String(d.year)));
    this.yScale.domain([0, d3.max(data, (d) => d.revenue)]);

    this.svg
      .append("g")
      .attr("transform", "translate(10,14)rotate(-45)")
      .attr("transform", "translate(0," + this.height + ")")
      .call(
        d3.axisBottom(this.xScale).tickFormat((interval: any, i: any) => {
          return i % 4 !== 0 ? "" : interval;
        })
      );
    const maxYdata = d3.max(data, (d) => d.revenue);
    console.log("maxYdata: " + maxYdata + " totl len:" + data.length);
    this.svg.append("g").call(
      d3.axisRight(this.yScale).tickValues([maxYdata]));

    const bars = this.svg
      .selectAll("rect")
      .data(data, (d) => this.yScale(d.volume));

    bars.exit().transition().duration(1000).attr("height", 0).remove();


    bars
      .enter()
      .append("rect")
      .attr("width", this.xScale.bandwidth())
      .attr("height", 0)
      .attr("x", (d) => this.xScale(d.year))
      .attr("y", this.yScale(0) + 1)
      .on("click", (d) => {
        console.log("clicked");
      })
      .merge(bars)
      .transition()
      .attr("x", (d) => this.xScale(d.year))
      .attr("y", (d) => this.yScale(d.volume))
      .attr("width", this.xScale.bandwidth())
      .attr("height", (d) => this.height - this.yScale(d.volume))
      .attr("fill", "green");
  }

  public increase(): void {
    this.startIndex = this.endIndex;
    this.endIndex = this.endIndex + AppConst.chart_increase_decrease_size;
    console.log(
      "increased. start: " + this.startIndex + " end: " + this.endIndex
    );
    this.createChart();
  }

  public decrease(): void {
    this.startIndex = this.startIndex - AppConst.chart_increase_decrease_size;
    this.endIndex = this.endIndex - AppConst.chart_increase_decrease_size;
    console.log(
      "decreased. start: " + this.startIndex + " end: " + this.endIndex
    );
    this.createChart();
  }

}
