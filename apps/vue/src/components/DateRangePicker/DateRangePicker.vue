<script setup lang="ts">
import DateRangePickerPopover from '../DateRangePickerPopover/DateRangePickerPopover.vue';
import DateRangePickerProvider from '../DateRangePickerProvider/DateRangePickerProvider.vue';
import { useDateRangePicker } from './useDateRangePicker';
import type { DateRangePickerProps } from './date-range-picker.types';

const props = defineProps<DateRangePickerProps>();
const { dateRangePickerProps } = useDateRangePicker(props);
</script>

<template>
  <DateRangePickerProvider v-bind="dateRangePickerProps">
    <DateRangePickerPopover />
  </DateRangePickerProvider>
</template>
