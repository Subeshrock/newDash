import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicDashHeaderComponent } from './lic-dash-header.component';

describe('LicDashHeaderComponent', () => {
  let component: LicDashHeaderComponent;
  let fixture: ComponentFixture<LicDashHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicDashHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicDashHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
