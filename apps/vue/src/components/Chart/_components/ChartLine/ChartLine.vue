<script setup lang="ts">
import { useChartLine } from './useChartLine';

const { points, coordinates, lineProps, pointProps } = useChartLine();
</script>

<template>
  <g data-part="line">
    <polyline :points="coordinates" pathLength="1" v-bind="lineProps" />
    <circle
      v-for="(point, index) in points"
      :key="point.label"
      :cx="point.x"
      :cy="point.y"
      :r="3"
      :style="{ animationDelay: `${100 + index * 60}ms` }"
      v-bind="pointProps"
    />
  </g>
</template>
