<script setup lang="ts">
import type { ErrorBoundaryProps } from './error-boundary.types';

const props = defineProps<ErrorBoundaryProps>();
</script>

<template>
  <slot />
</template>
