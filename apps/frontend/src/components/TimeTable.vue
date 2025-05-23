<script setup lang="ts">
import { Day, TimeSlot, TimeTable } from './timetable_type';

const props = defineProps<{
  timetable: TimeTable;
}>();
console.log('Fuck: ', props.timetable)

const times = [
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
const timeslots: TimeSlot[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const formatted: {
  dayName: string;
  data: Day,
  is_current_day: boolean;
}[] = [
  { dayName: 'Monday', data: props.timetable.Monday, is_current_day: true },
  { dayName: 'Tuesday', data: props.timetable.Tuesday, is_current_day: false },
  { dayName: 'Wednesday', data: props.timetable.Wednesday, is_current_day: false },
  { dayName: 'Thursday', data: props.timetable.Thursday, is_current_day: false },
  { dayName: 'Friday', data: props.timetable.Friday, is_current_day: false },
]
// for (const data of formatted) {
//   for (const idx of timeslots) {
//     console.table({
//       data,
//       idx,
//       last_slot: !(data.data[idx - 1 as TimeSlot]?.double_size),
//   });
//   }
// }

function removeDoubleOverlaps(time_slots: TimeSlot[], data: Day): TimeSlot[] {
  return time_slots.filter((idx) => !(data[idx - 1 as TimeSlot]?.double_size))
}
</script>
<script lang="ts">
import TimeTableCell from './TimeTableCell.vue';
export default {
  components: {
    TimeTableCell
  }
}
</script>

<template>
  <div class="table">
    <div class="column">
      <div
        v-for="time in times"
        :key="time"
        class="time"
      >
        {{ time }}
      </div>
    </div>
    <div
      v-for="data in formatted"
      :class="'column ' + data.dayName"
    >
      <div
        v-for="idx in removeDoubleOverlaps(timeslots, data.data)"
        :key="idx"
      >
        <div
          v-if="data.data[idx]"
          :class="data.data[idx].double_size ? 'double' : ''"
        >
          <TimeTableCell :data="data.data[idx]" />
        </div>
        <div v-else>
          <div class="cell">
            <div class="blank">
              Free {{ idx }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blank {
  opacity: 0;
}
.table {
  display: flex;
  gap: 0.3rem;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.time {
  background-color: var(--grey1);
  padding: 0.5rem;
  text-align: center;
  height: 6rem;
  display: flex;
  align-items: center;
  text-align: center;
}
.double > .subject {
  height: 12.3rem;
}
.cell {
  background-color: var(--grey2);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  height: 6rem;
}
</style>