<script setup lang="ts">
import DatePickerPopover from '../DatePickerPopover/DatePickerPopover.vue';
import DatePickerProvider from '../DatePickerProvider/DatePickerProvider.vue';
import { useDatePicker } from './useDatePicker';
import type { DatePickerProps } from './date-picker.types';

const props = defineProps<DatePickerProps>();
const { datePickerProviderProps } = useDatePicker(props);
</script>

<template>
  <DatePickerProvider v-bind="datePickerProviderProps">
    <DatePickerPopover />
  </DatePickerProvider>
</template>
