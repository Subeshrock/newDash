import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-boq-header',
  templateUrl: './boq-header.component.html',
  styleUrls: ['./boq-header.component.css'],
})
export class BoqHeaderComponent {
  disableSelect = new FormControl(false);
}
