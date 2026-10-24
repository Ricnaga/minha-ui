<script setup lang="ts">
import { calendar } from '@/theme';
import { useCalendarGrid } from './useCalendarGrid';

const { gridWrapper, gridDay } = calendar();
const { days, currentMonth, setValue, value } = useCalendarGrid();

function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
</script>

<template>
  <div :class="gridWrapper()" role="region" aria-label="Calendário">
    <button
      v-for="day in days"
      :key="day.toISOString()"
      @click="setValue(day)"
      :data-selected="value && normalizeDate(day).getTime() === normalizeDate(value).getTime()"
      :class="gridDay({
        isSelected: !!(value && normalizeDate(day).getTime() === normalizeDate(value).getTime()),
        hasNotSelectedAndHasNotOutsideMonth: !(value && normalizeDate(day).getTime() === normalizeDate(value).getTime()) && day.getMonth() !== currentMonth.getMonth(),
        hasNotSelectedAndIsOutsideMonth: !(value && normalizeDate(day).getTime() === normalizeDate(value).getTime()) && day.getMonth() !== currentMonth.getMonth(),
      })"
    >
      {{ day.getDate() }}
    </button>
  </div>
</template>
