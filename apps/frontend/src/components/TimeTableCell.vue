<script setup lang="ts">
import { convertInstructorCodeToInstructorName, convertSubjectCodeToSubjectName } from '../scripts/translations';
import { Class } from './timetable_type';

const props = defineProps<{
  data: Class
}>();
</script>

<template>
  <div class="subject">
    <div class="name">
      {{ convertSubjectCodeToSubjectName(data.subject_code) }}
    </div>
    <div class="smol location">
      {{ data.location }}
    </div>
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
.smol {
  font-size: 0.8rem;
}
</style>