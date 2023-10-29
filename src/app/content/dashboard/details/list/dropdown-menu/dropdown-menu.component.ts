import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  @Input('show') show: boolean;
  @Input('cid') cid: number;
  @Input('dialog') dialog: HTMLElement;
  @Input('openBtn') openBtn: HTMLElement;

  properties = [
    { name: 'Total sales', checked: true },
    { name: 'Max transaction count per hour', checked: false },
    { name: 'Total transaction', checked: true },
    { name: 'Max transaction count date-time', checked: false },
    { name: 'Total value', checked: true },
    { name: 'Compressor status', checked: false },
  ];

  @HostListener('document:click', ['$event']) clickout(event) {
    if (this.openBtn.contains(event.target)) {
      this.show = true;
    } else if (!this.eRef.nativeElement.contains(event.target) && !this.dialog.contains(event.target)) {
      this.show = false;
    }
  }

  @HostListener('document:keyup', ['$event']) keyup(event) {
    if (event.code === 'Escape') {
      this.show = false;
    }
  }

  constructor(private eRef: ElementRef) { }
}
