<script lang="ts">
import Multiselect from 'vue-multiselect'
import { TimeTable as TimeTableT } from '../components/timetable_type';
import Timetable from '../components/TimeTable.vue';

const batches = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
];
const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
const timetable_data: TimeTableT = {
  Monday: {'0': { subject_code: 'UCS101', location: 'LP103', instructor: 'VVK' }},
  Tuesday: {'1': { subject_code: 'UCS101', location: 'CED/CAD', instructor: 'VVK', double_size: true }},
  Wednesday: {'5': { subject_code: 'UCS101', location: 'LP103', instructor: 'VVK' }},
  Thursday: {'10': { subject_code: 'UCS101', location: 'LP103', instructor: 'VVK' }},
  Friday: {'7': { subject_code: 'UCS101', location: 'LP103', instructor: 'VVK' }},
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
