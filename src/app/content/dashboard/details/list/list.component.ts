import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  companiesDetails = [
    {
      showProp: false,
      name: 'Compant Name 1',
      details: [
        {
          name: 'Total Sales',
          value: 62721,
          unitDown: 'm',
          unitUp: '3',
        },
        {
          name: 'Compression State',
          value: 'Compression',
        },
        {
          name: 'Max Transaction / hour',
          value: 20,
        },
        {
          name: 'Total Value',
          value: 550,
          unitDown: 'EGP'
        },
        {
          name: 'Total Transaction Count',
          value: 5161,
        },
        {
          name: 'Max Transaction Date-Time',
          value: '8-1-2021 | 10:16 PM',
        }
      ]
    },
    {
      showProp: false,
      name: 'Compant Name 2',
      details: [
        {
          name: 'Total Sales',
          value: 62721,
          unitDown: 'm',
          unitUp: '3',
        },
        {
          name: 'Compression State',
          value: 'Compression',
        },
        {
          name: 'Max Transaction / hour',
          value: 20,
        },
        {
          name: 'Total Value',
          value: 550,
          unitDown: 'EGP'
        },
        {
          name: 'Total Transaction Count',
          value: 5161,
        },
        {
          name: 'Max Transaction Date-Time',
          value: '8-1-2021 | 10:16 PM',
        }
      ]
    },
    {
      showProp: false,
      name: 'Compant Name 3',
      details: [
        {
          name: 'Total Sales',
          value: 62721,
          unitDown: 'm',
          unitUp: '3',
        },
        {
          name: 'Compression State',
          value: 'Compression',
        },
        {
          name: 'Max Transaction / hour',
          value: 20,
        },
        {
          name: 'Total Value',
          value: 550,
          unitDown: 'EGP'
        },
        {
          name: 'Total Transaction Count',
          value: 5161,
        },
        {
          name: 'Max Transaction Date-Time',
          value: '8-1-2021 | 10:16 PM',
        }
      ]
    },
    {
      showProp: false,
      name: 'Compant Name 4',
      details: [
        {
          name: 'Total Sales',
          value: 62721,
          unitDown: 'm',
          unitUp: '3',
        },
        {
          name: 'Compression State',
          value: 'Compression',
        },
        {
          name: 'Max Transaction / hour',
          value: 20,
        },
        {
          name: 'Total Value',
          value: 550,
          unitDown: 'EGP'
        },
        {
          name: 'Total Transaction Count',
          value: 5161,
        },
        {
          name: 'Max Transaction Date-Time',
          value: '8-1-2021 | 10:16 PM',
        }
      ]
    },
    {
      showProp: false,
      name: 'Compant Name 5',
      details: [
        {
          name: 'Total Sales',
          value: 62721,
          unitDown: 'm',
          unitUp: '3',
        },
        {
          name: 'Compression State',
          value: 'Compression',
        },
        {
          name: 'Max Transaction / hour',
          value: 20,
        },
        {
          name: 'Total Value',
          value: 550,
          unitDown: 'EGP'
        },
        {
          name: 'Total Transaction Count',
          value: 5161,
        },
        {
          name: 'Max Transaction Date-Time',
          value: '8-1-2021 | 10:16 PM',
        }
      ]
    }
  ];

  properties = [
    { name: 'Total sales', checked: true },
    { name: 'Max transaction count per hour', checked: false },
    { name: 'Total transaction', checked: true },
    { name: 'Max transaction count date-time', checked: false },
    { name: 'Total value', checked: true },
    { name: 'Compressor status', checked: false },
  ];

  showProperties(company) {
    company.showProp = true;
  }
}
