<script setup lang="ts">
import { useChartBars } from './useChartBars';

const { points, innerHeight, barProps } = useChartBars();
</script>

<template>
  <g data-part="bars">
    <rect
      v-for="(point, index) in points"
      :key="point.label"
      :x="point.barX"
      :y="point.y"
      :width="point.barWidth"
      :height="Math.max(innerHeight - point.y, 0)"
      :rx="2"
      :style="{ animationDelay: `${Math.min(index * 25, 200)}ms` }"
      v-bind="barProps"
    />
  </g>
</template>
