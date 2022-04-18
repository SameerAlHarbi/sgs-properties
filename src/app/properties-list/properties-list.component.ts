import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css'],
})
export class PropertiesListComponent implements OnInit {
  properteis: Array<any>;
  constructor() {
    this.properteis = [
      {
        id: '1.',
        proprtyNo: '100001',
        proprtyName: 'NootBook',
        propertyDescrption: 'HP NotBook Z400',
        serialNo: 'As3435Ac',
        type: 'Hp',
      },
      {
        id: '2.',
        proprtyNo: '200001',
        proprtyName: 'DeskTop',
        propertyDescrption: 'DeskTop Z400',
        serialNo: 'As3435Ac',
        type: 'Hp',
      },
    ];
  }

  ngOnInit(): void {}
}
