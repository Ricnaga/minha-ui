<script setup lang="ts">
import { rangeCalendar } from '@/theme';
import { useRangeCalendarGrid } from './useRangeCalendarGrid';

const { gridWrapper, gridDay } = rangeCalendar();
const { days, currentMonth, setRange, value } = useRangeCalendarGrid();

function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
</script>

<template>
  <div :class="gridWrapper()" role="region" aria-label="Calendário">
    <button
      v-for="day in days"
      :key="day.toISOString()"
      @click="setRange(day)"
      :class="gridDay({
        isOutsideMonth: day.getMonth() !== currentMonth.getMonth(),
        isInRange: !!(value.from && value.to && normalizeDate(day) > normalizeDate(value.from) && normalizeDate(day) < normalizeDate(value.to)),
        isRangeStart: !!(value.from && normalizeDate(day).getTime() === normalizeDate(value.from).getTime() && value.to),
        isRangeEnd: !!(value.to && normalizeDate(day).getTime() === normalizeDate(value.to).getTime() && value.from),
        isSelected: !!(value.from && !value.to && normalizeDate(day).getTime() === normalizeDate(value.from).getTime()),
      })"
    >
      <span class="relative z-20">{{ day.getDate() }}</span>
    </button>
  </div>
</template>
