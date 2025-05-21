<script setup lang="ts">
const props = defineProps<{
  years: string[];
  currentYear: string;
  setYear: (year: string) => void;
}>();
</script>

<template>
  <div class="year_picker"></div>
</template>

<style scoped>
</style>