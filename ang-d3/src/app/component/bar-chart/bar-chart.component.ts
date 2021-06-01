import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ChartServiceService } from 'src/app/services/chart-service.service';
import { ISalesData } from 'src/app/shared/model/sales-data.model';

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
    const tooltip = d3.select('body').append('div').attr('class', 'toolTip');
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
      .domain([0, 10000])
      .range([this.height, 0]);

    this.svg.append('g')
      .call(d3.axisLeft(y));

    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.year))
      .attr('y', d => y(d.volume))
      .attr('width', x.bandwidth())
      .attr('height', (d) => this.height - y(d.volume))
      .attr('fill', 'green')
      .on('mousemove', (d) => {
        tooltip
          // .style('left', d3.event.pageX - 20 + 'px')
          // .style('top', d3.event.pageY - 40 + 'px')
          .style('display', 'inline-block')
          .html((d.year + ' (' + d.volume + ')'));
      })
      .on('mouseout', (d) => { tooltip.style('display', 'none'); });
  }
}
