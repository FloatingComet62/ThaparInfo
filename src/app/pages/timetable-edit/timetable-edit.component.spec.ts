import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableEditComponent } from './timetable-edit.component';

describe('TimetableEditComponent', () => {
  let component: TimetableEditComponent;
  let fixture: ComponentFixture<TimetableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
