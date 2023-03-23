import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicIntelChartComponent } from './lic-intel-chart.component';

describe('LicIntelChartComponent', () => {
  let component: LicIntelChartComponent;
  let fixture: ComponentFixture<LicIntelChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicIntelChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicIntelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
