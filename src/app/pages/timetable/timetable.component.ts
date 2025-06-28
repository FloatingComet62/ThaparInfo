import { Component } from '@angular/core';

import { BatchPickerComponent as BatchPicker } from '../../components/batch-picker/batch-picker.component';
import { YearPickerComponent as YearPicker } from '../../components/year-picker/year-picker.component';
import { TimetableComponent as TimeTable } from '../../components/timetable/timetable.component';
import { TimeTable as TimeTableT } from '../../scripts/timetable';
import { getBatches, getTimetable } from '../../scripts/data';

@Component({
  selector: 'app-timetable',
  imports: [BatchPicker, YearPicker, TimeTable],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {
  currentyear = 'Year 1';
  batches = ['B1', 'B2', 'B3', 'B4'];
  currentbatch = 'B1';
  timetable: TimeTableT = {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
  };
  yearOption(year: string) {
    this.currentyear = year;
    this.batches = getBatches(this.currentyear);
    this.timetable = getTimetable(this.currentyear, this.currentbatch);
  }
  batchOption(batch: string) {
    this.currentbatch = batch;
    this.timetable = getTimetable(this.currentyear, this.currentbatch);
  }
}
