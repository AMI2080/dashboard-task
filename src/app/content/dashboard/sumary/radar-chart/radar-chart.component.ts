import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend,
  ApexForecastDataPoints
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  forecastDataPoints: ApexForecastDataPoints;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      legend: {
        show: false
      },
      series: [
        { data: [130, 160, 190, 150, 125, 200, 165, 120, 160, 185, 140, 120] },
        { data: [165, 120, 160, 185, 140, 120, 130, 160, 190, 150, 125, 200] }
      ],
      chart: {
        toolbar: { show: false },
        height: 267,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      fill: { colors: ['#009ACF33', '#00CBC033'] },
      stroke: {
        curve: 'smooth',
        colors: ['#009ACF', '#00CBC0'],
        width: 1,
      },
      markers: {
        size: 0
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']
          },
        },
      },
      xaxis: {
        labels: {
          style: {
            fontFamily: 'Futura PT',
            fontSize: '10px',
            fontWeight: 'medium',
            colors: ['#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96', '#8D8F96'],
          },
        },
        categories: [
          "24:00",
          "02:00",
          "04:00",
          "06:00",
          "08:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00"
        ]
      }
    };
  }
}
