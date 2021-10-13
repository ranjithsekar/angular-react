import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

import { ChartServiceService } from 'src/app/services/chart-service.service';
import { ISalesData } from 'src/app/shared/model/sales-data.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  private svg;
  private margin = 50;
  private width = 400 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private chartService: ChartServiceService) { }

  ngOnInit(): void {
    this.createSvg();
    // d3.json('https://api.jsonbin.io/b/6026a73887173a3d2f5c2fbd/1').then((data: ISalesData[]) => this.drawBars(data));
    d3.json('../../assets/sales-data.json').then((data: ISalesData[]) => this.generateBarChart(data));
  }

  private createSvg(): void {
    this.svg = d3.select('figure#barchart')
      .append('svg')
      .attr('width', this.width + (this.margin * 2))
      .attr('height', this.height + (this.margin * 2))
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private generateBarChart(data: ISalesData[]): void {
    // const tooltip = d3.select('body').append('div').attr('class', 'toolTip');
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => String(d.year)))
      .padding(0.2);

    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    const y = d3.scaleLinear()
      .domain([1, d3.max(data, (d) => d.revenue)])
      .range([this.height, 0]);

    this.svg.append('g')
      .call(
        d3.axisLeft(y)
          .tickFormat(d3.format('~s'))
      );

    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: ISalesData) => x(String(d.year)))
      .attr('y', (d: ISalesData) => y(d.revenue))
      .attr('width', x.bandwidth())
      .attr('height', (d: ISalesData) => this.height - y(d.revenue))
      .attr('fill', 'green')
      .on('mouseover', (d: ISalesData, i: number) => this.onMouseOver(d, i));
  }

  public onMouseOver(d, i): void {
    console.log('on mouse over');
    tippy('#id_' + d.year, { content: d.revenue });
  }
}

// mouse over

// this.svg.selectAll('bars')
//   .data(data)
//   .enter()
//   .append('rect')
//   .attr('x', (d: ISalesData) => x(d.year as string))
//   .attr('y', (d: ISalesData) => y(d.revenue))
//   .attr('width', x.bandwidth())
//   .attr('height', (d: ISalesData) => this.height - y(d.revenue))
//   .attr('fill', 'green')
//   .on('mousemove', (d) => {
//     tooltip
//       // .style('left', d3.event.pageX - 20 + 'px')
//       // .style('top', d3.event.pageY - 40 + 'px')
//       .style('display', 'inline-block')
//       .html((d.year + ' (' + d.revenue + ')'));
//   })
//   .on('mouseout', (d) => { tooltip.style('display', 'none'); });