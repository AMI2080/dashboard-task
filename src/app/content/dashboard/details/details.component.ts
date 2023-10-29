import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  cards = [
    {
      title: 'Total Value',
      heighLight: true,
      value: 71028,
      formatValue: true,
      unit: 'EGP',
      unitDown: null,
      unitUp: null,
      progress: { value: 20, unit: '%', unitDown: null, unitUp: null, sign: 'down' },
    },
    {
      title: 'Total Seles',
      heighLight: false,
      value: 20000,
      formatValue: true,
      unitDown: 'm',
      unitUp: '3',
      progress: { value: 50, unit: 'm', unitDown: null, unitUp: '3', sign: 'up' },
    },
    {
      title: 'Avg Seles',
      heighLight: false,
      value: 20000,
      formatValue: true,
      unitDown: 'm',
      unitUp: '3',
      progress: { value: 50, unit: 'm', unitDown: null, unitUp: '3', sign: 'down' },
    },
    {
      title: 'Total Transaction Count',
      heighLight: false,
      value: 1567,
      formatValue: false,
      unitDown: null,
      unitUp: null,
      progress: { value: 50, unit: 'm', unitDown: null, unitUp: '3', sign: 'up' },
    }
  ]
}
