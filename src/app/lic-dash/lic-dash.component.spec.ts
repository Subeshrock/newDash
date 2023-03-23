import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicDashComponent } from './lic-dash.component';

describe('LicDashComponent', () => {
  let component: LicDashComponent;
  let fixture: ComponentFixture<LicDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
