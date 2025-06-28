import { TimeTable } from "./timetable";

export function getBatches(year: string): string[] {
  return ['B1', 'B2', 'B3', 'B4'];
}

export function getTimetable(year: string, batch: string): TimeTable {
  return {
    Monday: {
      '7': { subject_code: 'UPH013', location: 'T301', instructor: 'VVK', class_type: 'tutorial' },
      '8': { subject_code: 'UES102', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '9': { subject_code: 'UPH013', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '10': { subject_code: 'UES101', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
    },
    Tuesday: {
      '2': { subject_code: 'UMA023', location: 'LP106', instructor: 'VVK', class_type: 'lecture' },
      '3': { subject_code: 'UMA023', location: 'T104', instructor: 'VVK', class_type: 'tutorial' },
      '7': { subject_code: 'UHU003', location: 'C309', instructor: 'VVK', double_size: true, class_type: 'lab' },
      '9': { subject_code: 'UHU003', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
      '10': { subject_code: 'UPH013', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
    },
    Wednesday: {
      '0': { subject_code: 'UES101', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '1': { subject_code: 'UAI201', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '2': { subject_code: 'UMA023', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '3': { subject_code: 'UES102', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '4': { subject_code: 'UCS101', location: 'ML-LAB', instructor: 'VVK', double_size: true, class_type: 'lab' },
    },
    Thursday: {
      '4': { subject_code: 'UPH013', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
      '5': { subject_code: 'UMA023', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
    },
    Friday: {
      '0': { subject_code: 'UAI201', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
      '1': { subject_code: 'UHU003', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
      '2': { subject_code: 'UES102', location: 'W/Shop', instructor: 'VVK', double_size: true, class_type: 'lab' },
      '4': { subject_code: 'UES101', location: 'F311', instructor: 'VVK', double_size: true, class_type: 'tutorial' },
      '7': { subject_code: 'UPH013', location: 'G324', instructor: 'VVK', double_size: true, class_type: 'lab' },
      '9': { subject_code: 'UES101', location: 'CED CAD', instructor: 'VVK', double_size: true, class_type: 'lab' },
    }
  }
}