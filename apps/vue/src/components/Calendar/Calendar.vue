<script setup lang="ts">
import CalendarGrid from './_components/CalendarGrid/CalendarGrid.vue';
import CalendarHeader from './_components/CalendarHeader/CalendarHeader.vue';
import type { CalendarProps } from './calendar.types';
import { useCalendarProvider } from './useCalendar';

const props = defineProps<CalendarProps>();
useCalendarProvider(props);
</script>

<template>
  <div class="bg-white">
    <CalendarHeader />
    <CalendarGrid />
  </div>
</template>
