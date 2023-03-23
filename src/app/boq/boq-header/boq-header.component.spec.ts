import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqHeaderComponent } from './boq-header.component';

describe('BoqHeaderComponent', () => {
  let component: BoqHeaderComponent;
  let fixture: ComponentFixture<BoqHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoqHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
