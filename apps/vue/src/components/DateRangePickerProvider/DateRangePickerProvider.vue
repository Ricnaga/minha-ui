<script setup lang="ts">
import { useDateRangePickerProvider } from './useDateRangePickerProvider';
import type { DateRangePickerProviderProps } from './date-range-picker-provider.types';

const props = defineProps<DateRangePickerProviderProps>();
useDateRangePickerProvider(props);
</script>

<template>
  <slot />
</template>
