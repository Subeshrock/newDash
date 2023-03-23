import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqTableComponent } from './boq-table.component';

describe('BoqTableComponent', () => {
  let component: BoqTableComponent;
  let fixture: ComponentFixture<BoqTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoqTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
