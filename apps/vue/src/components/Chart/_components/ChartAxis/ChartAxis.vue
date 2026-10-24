<script setup lang="ts">
import { useChartAxis } from './useChartAxis';

const props = defineProps<{ orientation: 'x' | 'y' }>();
const axis: any = useChartAxis(props.orientation);
</script>

<template>
  <g :data-part="axis.orientation === 'y' ? 'axis-y' : 'axis-x'" :transform="axis.transform">
    <template v-if="axis.orientation === 'y'">
      <text v-for="label in axis.labels" :key="label.tick" :x="-8" :y="label.y + 4" text-anchor="end" v-bind="axis.axisLabelProps">{{ label.tick }}</text>
    </template>
    <template v-else>
      <line :x1="0" :x2="(axis.innerWidth || 0)" :y1="0" :y2="0" v-bind="axis.axisLineProps" />
      <text v-for="label in axis.labels" :key="label.x" :x="label.x" :y="16" text-anchor="middle" v-bind="axis.axisLabelProps">{{ label.label }}</text>
    </template>
  </g>
</template>
