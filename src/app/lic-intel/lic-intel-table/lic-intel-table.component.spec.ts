import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicIntelTableComponent } from './lic-intel-table.component';

describe('LicIntelTableComponent', () => {
  let component: LicIntelTableComponent;
  let fixture: ComponentFixture<LicIntelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicIntelTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicIntelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
