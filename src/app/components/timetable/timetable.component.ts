import { Component, Input, OnInit } from '@angular/core';
import { TimetableCellComponent } from '../timetable-cell/timetable-cell.component';
import { Class, Day, TimeSlot, TimeTable } from '../../scripts/timetable';

@Component({
  selector: 'app-timetable-component',
  imports: [TimetableCellComponent],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent implements OnInit {
  @Input({ required: true }) timetable!: TimeTable;
  times = [
    '8:00 - 8:50',
    '8:50 - 9:40',
    '9:40 - 10:30',
    '10:30 - 11:20',
    '11:20 - 12:10',
    '12:10 - 1:00',
    '1:00 - 1:50',
    '1:50 - 2:40',
    '2:40 - 3:30',
    '3:30 - 4:20',
    '4:20 - 5:10',
  ];
  timeslots: TimeSlot[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  renderData: Class[][] = [];

  ngOnInit(): void {
    const data = this.formatTimeTable();
    const classes: Class[][] = [];
    for (const day of data) {
      classes.push(this.removeDoubleOverlaps(this.timeslots, day.data));
    }
    console.log(classes);
    this.renderData = classes;
  }

  formatTimeTable(): {
    dayName: string;
    data: Day,
    is_current_day: boolean;
  }[] {
    console.log('formatTimeTable', this.timetable);
    return [
      { dayName: 'Monday', data: this.timetable.Monday, is_current_day: true },
      { dayName: 'Tuesday', data: this.timetable.Tuesday, is_current_day: false },
      { dayName: 'Wednesday', data: this.timetable.Wednesday, is_current_day: false },
      { dayName: 'Thursday', data: this.timetable.Thursday, is_current_day: false },
      { dayName: 'Friday', data: this.timetable.Friday, is_current_day: false },
    ]
  }
  removeDoubleOverlaps(time_slots: TimeSlot[], data: Day): Class[] {
    const output = time_slots
      .filter((idx) => {
        const slot = data[idx - 1];
        if (!slot) {
          return true;
        }
        return !(slot.double_size ?? false);
      })

    return output.map((item) => data[item]);
  }
}
