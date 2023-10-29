import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

type filterOption = 'today' | 'yesterday' | 'last week';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  filterOptions: filterOption[] = [
    'today',
    'yesterday',
    'last week'
  ];

  selectedFilter: filterOption;

  startingDate: FormControl = new FormControl();
  endingDate: FormControl = new FormControl();

  ngOnInit(): void {
    // In case starting with review Today report
    // this.filterWithToday();
  }

  filterWith(option: filterOption) {
    this.selectedFilter = option;

    let filterString = option.replace(' ', '');
    filterString = filterString.charAt(0).toUpperCase() + filterString.slice(1)
    const filterFunctionName = 'filterWith' + filterString;
    eval(`this.${filterFunctionName}()`);
  }

  filterWithToday() {
    const now = new Date();
    this.startingDate = new FormControl(now);
    this.endingDate = new FormControl(now);
  }

  filterWithYesterday() {
    const now = new Date();
    const yesterday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
    );
    this.startingDate = new FormControl(yesterday);
    this.endingDate = new FormControl(yesterday);
  }

  filterWithLastweek() {
    const now = new Date();
    const lastWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 6,
    );
    this.startingDate = new FormControl(lastWeek);
    this.endingDate = new FormControl(now);
  }
}
