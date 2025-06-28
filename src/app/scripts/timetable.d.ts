export type ClassType = 'lecture' | 'tutorial' | 'lab';
export type Class = {
  subject_code: string;
  location: string;
  instructor: string;
  double_size?: boolean;
  class_type: ClassType;
};
export type TimeSlot =
  0 | 1 | 2 | 3 | 4 | 5 |
  6 | 7 | 8 | 9 | 10;
export type Day = {
  [key in typeof TimeSlot]: Class
  // 0?: Class, // 8:00
  // 1?: Class, // 8:50
  // 2?: Class, // 9:40
  // 3?: Class, // 10:30
  // 4?: Class, // 11:20
  // 5?: Class, // 12:10
  // 6?: Class, // 1:00
  // 7?: Class, // 1:50
  // 8?: Class, // 2:40
  // 9?: Class, // 3:30
  // 10?: Class, // 4:20
};
export type TimeTable = {
  Monday: Day;
  Tuesday: Day;
  Wednesday: Day;
  Thursday: Day;
  Friday: Day;
};
export type KeysNullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type PartialTimeTable = {
  Monday?: KeysNullable<Day>;
  Tuesday?: KeysNullable<Day>;
  Wednesday?: KeysNullable<Day>;
  Thursday?: KeysNullable<Day>;
  Friday?: KeysNullable<Day>;
};