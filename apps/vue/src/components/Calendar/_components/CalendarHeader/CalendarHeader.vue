<script setup lang="ts">
import { calendar } from '@/theme';
import { useCalendarHeader } from './useCalendarHeader';
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';

const { headerWrapper, headerButton, headerLabel } = calendar();
const { label, goToNextMonth, goToPrevMonth } = useCalendarHeader();
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
