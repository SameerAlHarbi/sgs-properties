import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-year',
  template: `<p>&copy;	{{currentYear}}</p>`
})
export class CurrentYearComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
