<script setup lang="ts">
import { useChartGrid } from './useChartGrid';

const { lines, innerWidth, lineProps } = useChartGrid();
</script>

<template>
  <g data-part="grid">
    <line v-for="line in lines" :key="line.tick" :x1="0" :x2="innerWidth" :y1="line.y" :y2="line.y" v-bind="lineProps" />
  </g>
</template>
