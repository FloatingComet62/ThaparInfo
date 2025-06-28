import { Component, Input, OnInit } from '@angular/core';
import { ClassType } from '../../scripts/timetable';
import { convertInstructorCodeToInstructorName, convertSubjectCodeToSubjectName } from '../../scripts/translations';

@Component({
  selector: 'app-timetable-cell',
  imports: [],
  templateUrl: './timetable-cell.component.html',
  styleUrl: './timetable-cell.component.scss'
})
export class TimetableCellComponent implements OnInit {
  @Input({ required: true }) subject_code: string = '';
  @Input({ required: true }) location: string = '';
  @Input({ required: true }) instructor: string = '';
  @Input({ required: true }) double_size?: boolean;
  @Input({ required: true }) class_type: ClassType = 'lecture';

  is_lecture = false;
  is_tutorial = false;
  is_lab = false;

  ngOnInit(): void {
    if (this.class_type == 'lecture') {
      this.is_lecture = true;
    } else if (this.class_type == 'lab') {
      this.is_lab = true;
    } else {
      this.is_tutorial = true;
    }
  }

  convertInstructorCodeToInstructorName = convertInstructorCodeToInstructorName;
  convertSubjectCodeToSubjectName = convertSubjectCodeToSubjectName;
}
