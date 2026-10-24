<script setup lang="ts">
import Calendar from '../Calendar/Calendar.vue';
import { useDatePickerCalendar } from './useDatePickerCalendar';

const { calendarProps } = useDatePickerCalendar();
</script>

<template>
  <Calendar v-bind="calendarProps" />
</template>
