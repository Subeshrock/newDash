import { Component } from '@angular/core';

export interface InteLicen {
  users: string;
  role: string;
  priv: string;
  modules: string;
  'lice index': string;
  'sod index': string;
  lld: string;
  select: boolean;
  trend: string;
}

const INTELL_DATAL: InteLicen[] = [
  {
    users: 'Name 1',
    role: 'Role 1',
    priv: 'Priv 1',
    modules: 'Module 1',
    'lice index': '7L',
    'sod index': '7H',
    lld: '23-03-2023',
    select: true,
    trend: 'Trend',
  },
  {
    users: 'Name 2',
    role: 'Role 2',
    priv: 'Priv 2',
    modules: 'Module 2',
    'lice index': '7L',
    'sod index': '7H',
    lld: '23-03-2023',
    select: false,
    trend: 'Trend',
  },
  {
    users: 'Name 3',
    role: 'Role 3',
    priv: 'Priv 3',
    modules: 'Module 3',
    'lice index': '7L',
    'sod index': '7H',
    lld: '23-03-2023',
    select: false,
    trend: 'Trend',
  },
  {
    users: 'Name 4',
    role: 'Role 4',
    priv: 'Priv 4',
    modules: 'Module 4',
    'lice index': '7L',
    'sod index': '7H',
    lld: '23-03-2023',
    select: true,
    trend: 'Trend',
  },
];

@Component({
  selector: 'app-lic-intel-table',
  templateUrl: './lic-intel-table.component.html',
  styleUrls: ['./lic-intel-table.component.css'],
})
export class LicIntelTableComponent {
  displayedColumns: string[] = [
    'users',
    'role',
    'priv',
    'modules',
    'lice index',
    'sod index',
    'lld',
    'select',
    'trend',
  ];
  dataSource = INTELL_DATAL;
}
