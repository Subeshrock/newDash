import { Component } from '@angular/core';

@Component({
  selector: 'app-lic-dash-process',
  templateUrl: './lic-dash-process.component.html',
  styleUrls: ['./lic-dash-process.component.css'],
})
export class LicDashProcessComponent {
  processes = [
    {
      title: 'Finance',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'SCM',
      description: '$123,456',
      color: 'danger',
    },
    {
      title: 'Proc',
      description: '$123,456',
      color: 'danger',
    },
    {
      title: 'HCM',
      description: '$123,456',
      color: 'green',
    },
  ];

  modules = [
    {
      title: 'Module1',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module2',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module3',
      description: '$123,456',
      color: 'success',
    },
    {
      title: 'Module4',
      description: '$123,456',
      color: 'danger',
    },
    {
      title: 'Module1',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module2',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module3',
      description: '$123,456',
      color: 'success',
    },
    {
      title: 'Module4',
      description: '$123,456',
      color: 'danger',
    },
    {
      title: 'Module1',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module2',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module3',
      description: '$123,456',
      color: 'success',
    },
    {
      title: 'Module4',
      description: '$123,456',
      color: 'danger',
    },
    {
      title: 'Module1',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module2',
      description: '$123,456',
      color: 'warning',
    },
    {
      title: 'Module3',
      description: '$123,456',
      color: 'success',
    },
    {
      title: 'Module4',
      description: '$123,456',
      color: 'danger',
    },
  ];

  onProcess() {}
}
