import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicDashProcessComponent } from './lic-dash-process.component';

describe('LicDashProcessComponent', () => {
  let component: LicDashProcessComponent;
  let fixture: ComponentFixture<LicDashProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicDashProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicDashProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
