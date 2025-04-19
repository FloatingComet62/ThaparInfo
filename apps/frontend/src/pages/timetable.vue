<script lang="ts">
import Multiselect from 'vue-multiselect'
import { TimeTable as TimeTableT } from '../components/timetable_type';
import Timetable from '../components/TimeTable.vue';

const batches = [
  '1X11',
  '1X12',
  '1X13',
  '1X14',
  '1X15',
];
const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
const timetable_data: TimeTableT = {
  Monday: {
    '7': { subject_code: 'UPH013', location: 'T301', instructor: 'VVK', class_type: 'tutorial' },
    '8': { subject_code: 'UES102', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
    '9': { subject_code: 'UPH013', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
    '10': { subject_code: 'UES101', location: 'LP103', instructor: 'VVK', class_type: 'lecture' },
  },
  Tuesday: {
    '1': { subject_code: 'UMA023', location: 'T104', instructor: 'VVK', class_type: 'tutorial' },
    '2': { subject_code: 'UMA023', location: 'LP106', instructor: 'VVK', class_type: 'lecture' },
    '7': { subject_code: 'UHU003', location: 'C309', instructor: 'VVK', double_size: true,  class_type: 'lab' },
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
    '1': { subject_code: 'UAI201', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
    '2': { subject_code: 'UHU003', location: 'LP104', instructor: 'VVK', class_type: 'lecture' },
    '3': { subject_code: 'UES102', location: 'W/Shop', instructor: 'VVK', class_type: 'lab' },
    '4': { subject_code: 'UES101', location: 'F311', instructor: 'VVK', double_size: true, class_type: 'tutorial' },
    '7': { subject_code: 'UPH013', location: 'G324', instructor: 'VVK', double_size: true, class_type: 'lab' },
    '9': { subject_code: 'UES101', location: 'CED CAD', instructor: 'VVK', double_size: true, class_type: 'lab' },
  },
}

export default {
  components: {
    Multiselect,
    Timetable
  },
  data () {
    return {
      batch_value: '',
      batches,
      year_value: '',
      years,
      timetable_data,
    }
  }
}
</script>

<template>
  <main>
    <div class="config">
      <multiselect
        v-model="year_value"
        class="select"
        :options="years"
        :searchable="false"
      />
      <multiselect
        v-model="batch_value"
        class="select"
        :options="batches"
      >
        <template #noResult>
          No batches found
        </template>
      </multiselect>
    </div>
    <Timetable :timetable="timetable_data" />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.config {
  display: flex;
  gap: 5rem;
}
.select {
  -moz-appearance:none;
  -webkit-appearance:none;
  appearance:none;
  background-color: var(--black1);
  color: var(--white);
  padding: 1rem;
  cursor: pointer;
  height: min-content;
}
.multiselect__input {
  outline: none;
  background-color: var(--black2);
  color: var(--white);
  padding: 1rem;
  text-align: center;
}
.multiselect__content {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
.multiselect__element {
  padding: 0.5rem;
}
.multiselect__element:hover {
  background-color: var(--black2);
  font-weight: 800;
}
/*@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
} */
</style>
