import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface BOQEntery {
  module: string;
  'unit cost': string;
  users: number;
  disc: number;
  effective: boolean;
  'start date': string;
  expiry: string;
  duration: string;
}

const ELEMENT_DATA: BOQEntery[] = [
  {
    module: 'Module1',
    'unit cost': '$2.6',
    users: 10,
    disc: 2.4,
    effective: false,
    'start date': '22-03-2023',
    expiry: '10-04-2023',
    duration: '20D',
  },
  {
    module: 'Module2',
    'unit cost': '$4.6',
    users: 8,
    disc: 2.8,
    effective: true,
    'start date': '22-03-2023',
    expiry: '10-04-2023',
    duration: '20D',
  },
  {
    module: 'Module3',
    'unit cost': '$3.6',
    users: 12,
    disc: 3.1,
    effective: false,
    'start date': '22-03-2023',
    expiry: '10-04-2023',
    duration: '20D',
  },
  {
    module: 'Module4',
    'unit cost': '$8.6',
    users: 20,
    disc: 4.6,
    effective: true,
    'start date': '22-03-2023',
    expiry: '10-04-2023',
    duration: '20D',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  disableSelect = new FormControl(false);
  displayedColumns: string[] = [
    'module',
    'unit cost',
    'users',
    'disc',
    'effective',
    'start date',
    'expiry',
    'duration',
  ];
  dataSource = ELEMENT_DATA;
}
