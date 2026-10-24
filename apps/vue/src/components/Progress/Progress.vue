<script setup lang="ts">
import { useProgress } from './useProgress';
import type { ProgressProps } from './progress.types';

const props = defineProps<ProgressProps>();
const { coreProps, wrapperProps } = useProgress(props);
</script>

<template>
  <div v-bind="wrapperProps">
    <div v-bind="coreProps" />
  </div>
</template>
