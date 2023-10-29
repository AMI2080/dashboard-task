import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  fill: ApexFill;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  @ViewChild("chart") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [273, 85, 194, 231, 141]
        }
      ],
      chart: {
        toolbar: { show: false },
        type: "bar",
        height: 280,
      },
      plotOptions: {
        bar: {
          columnWidth: "11px",
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          'Station Name 1',
          'Station Name 2',
          'Station Name 3',
          'Station Name 4',
          'Station Name 5'
        ]
      },
      fill: {
        colors: ['#FF7F5C'],
      }
    };
  }
}
