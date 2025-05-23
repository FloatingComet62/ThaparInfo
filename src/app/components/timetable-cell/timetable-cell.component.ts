import { Component, Input } from '@angular/core';
import { ClassType } from '../../scripts/timetable';
import { convertInstructorCodeToInstructorName, convertSubjectCodeToSubjectName } from '../../scripts/translations';

@Component({
  selector: 'app-timetable-cell',
  imports: [],
  templateUrl: './timetable-cell.component.html',
  styleUrl: './timetable-cell.component.scss'
})
export class TimetableCellComponent {
  @Input() subject_code: string = '';
  @Input() location: string = '';
  @Input() instructor: string = '';
  @Input() double_size?: boolean;
  @Input() class_type: ClassType = 'lecture';

  convertInstructorCodeToInstructorName = convertInstructorCodeToInstructorName;
  convertSubjectCodeToSubjectName = convertSubjectCodeToSubjectName;
}
