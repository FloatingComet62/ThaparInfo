<script setup lang="ts">
const props = defineProps<{
  batches: string[];
  currentBatch: string;
  setBatch: (batch: string) => void;
}>();
</script>

<template>
  <div class="batch_picker"></div>
</template>

<style scoped>
</style>