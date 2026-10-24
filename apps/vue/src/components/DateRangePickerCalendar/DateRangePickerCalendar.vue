<script setup lang="ts">
import RangeCalendar from '../RangeCalendar/RangeCalendar.vue';
import { useDateRangePickerCalendar } from './useDateRangePickerCalendar';

const { rangeCalendarProps } = useDateRangePickerCalendar();
</script>

<template>
  <RangeCalendar v-bind="rangeCalendarProps" />
</template>
