<script setup lang="ts">
import type { PieLegendProps } from '../../chart-pie.types';
import { usePieLegend } from './usePieLegend';

const props = defineProps<PieLegendProps>();
const { items, legendProps, itemProps, labelProps, valueProps } = usePieLegend(props);
</script>

<template>
  <ul data-part="legend" v-bind="legendProps">
    <li v-for="item in items" :key="item.label" v-bind="itemProps">
      <span aria-hidden="true" :class="item.swatchClass" />
      <span v-bind="labelProps">{{ item.label }}</span>
      <span v-bind="valueProps">{{ item.formattedValue }}</span>
    </li>
  </ul>
</template>
