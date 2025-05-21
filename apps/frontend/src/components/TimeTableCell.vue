<script setup lang="ts">
import { convertInstructorCodeToInstructorName, convertSubjectCodeToSubjectName } from '../scripts/translations';
import { Class } from './timetable_type';

const props = defineProps<{
  data: Class
}>();
</script>

<template>
  <div :class="'subject ' + data.class_type">
    <div class="name">
      {{ convertSubjectCodeToSubjectName(data.subject_code) }}
    </div>
    <a :href="'/map?target=' + data.location" class="location">
      {{ data.location }}
    </a>
    <div class="smol instructor">
      {{ convertInstructorCodeToInstructorName(data.instructor) }}
    </div>
  </div>
</template>

<style scoped>
.subject {
  background-color: var(--grey2);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 6rem;
}
.lecture {
  background-color: var(--red);
  cursor: pointer;
}
.tutorial {
  background-color: var(--blue);
}
.lab {
  background-color: var(--green);
}
.smol {
  font-size: 0.8rem;
}
</style>