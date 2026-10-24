<script setup lang="ts">
import { useChartAxis } from './useChartAxis';

const props = defineProps<{ orientation: 'x' | 'y' }>();
const axis = useChartAxis(props.orientation);
const labels: any[] = axis.labels as any[];
const axisLineProps = axis.axisLineProps;
const axisLabelProps = axis.axisLabelProps;
const transform = axis.transform;
const orientation = axis.orientation;
const innerWidth = axis.innerWidth;
</script>

<template>
  <g :data-part="orientation === 'y' ? 'axis-y' : 'axis-x'" :transform="transform">
    <template v-if="orientation === 'y'">
      <text v-for="label in labels" :key="label.tick" :x="-8" :y="label.y + 4" text-anchor="end" v-bind="axisLabelProps">{{ label.tick }}</text>
    </template>
    <template v-else>
      <line :x1="0" :x2="(innerWidth || 0)" :y1="0" :y2="0" v-bind="axisLineProps" />
      <text v-for="label in labels" :key="label.x" :x="label.x" :y="16" text-anchor="middle" v-bind="axisLabelProps">{{ label.label }}</text>
    </template>
  </g>
</template>
