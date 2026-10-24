<script setup lang="ts">
import { rangeCalendar } from '@/theme';
import { useRangeCalendarHeader } from './useRangeCalendarHeader';
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';

const { headerWrapper, headerButton, headerLabel } = rangeCalendar();
const { label, goToNextMonth, goToPrevMonth } = useRangeCalendarHeader();
</script>

<template>
  <header :class="headerWrapper()">
    <button @click="goToPrevMonth" :class="headerButton()" aria-label="Mês anterior">
      <PhCaretLeft />
    </button>
    <h2 :class="headerLabel()">{{ label }}</h2>
    <button @click="goToNextMonth" :class="headerButton()" aria-label="Próximo mês">
      <PhCaretRight />
    </button>
  </header>
</template>
