import { Component } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss']
})
export class SumaryComponent {
  stations: { name: string, sales?: number, unit?: string, progress?: number, unitSymple?: string, other?: 'NM' }[] = [
    { name: 'Station Name', sales: 62721, unit: 'm', progress: 45, unitSymple: '3' },
    { name: 'Station Name', sales: 62721, unit: 'm', progress: 45, unitSymple: '3' },
    { name: 'Station Name', other: 'NM' },
  ]
}
