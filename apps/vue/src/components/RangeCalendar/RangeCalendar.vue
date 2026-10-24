<script setup lang="ts">
import RangeCalendarGrid from './_components/RangeCalendarGrid/RangeCalendarGrid.vue';
import RangeCalendarHeader from './_components/RangeCalendarHeader/RangeCalendarHeader.vue';
import type { RangeCalendarProps } from './range-calendar.types';
import { useRangeCalendarProvider } from './useRangeCalendar';

const props = defineProps<RangeCalendarProps>();
useRangeCalendarProvider(props);
</script>

<template>
  <div class="bg-white">
    <RangeCalendarHeader />
    <RangeCalendarGrid />
  </div>
</template>
