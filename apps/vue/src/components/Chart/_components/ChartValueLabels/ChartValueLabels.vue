<script setup lang="ts">
import { useChartValueLabels } from './useChartValueLabels';

const { labels, labelProps } = useChartValueLabels();
</script>

<template>
  <g data-part="value-labels">
    <text
      v-for="label in labels"
      :key="label.label"
      :x="label.x"
      :y="label.y"
      text-anchor="middle"
      v-bind="labelProps"
    >
      {{ label.text }}
    </text>
  </g>
</template>
