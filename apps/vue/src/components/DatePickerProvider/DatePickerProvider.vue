<script setup lang="ts">
import { useDatePickerProvider } from './useDatePickerProvider';
import type { DatePickerProviderProps } from './date-picker-provider.types';

const props = defineProps<DatePickerProviderProps>();
useDatePickerProvider(props);
</script>

<template>
  <slot />
</template>
