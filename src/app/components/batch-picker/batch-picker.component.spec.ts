import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPickerComponent } from './batch-picker.component';

describe('YearPickerComponent', () => {
  let component: BatchPickerComponent;
  let fixture: ComponentFixture<BatchPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchPickerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BatchPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
