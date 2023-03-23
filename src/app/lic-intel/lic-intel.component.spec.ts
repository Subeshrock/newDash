import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicIntelComponent } from './lic-intel.component';

describe('LicIntelComponent', () => {
  let component: LicIntelComponent;
  let fixture: ComponentFixture<LicIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicIntelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
