<script setup lang="ts">
import ChartAxis from './_components/ChartAxis/ChartAxis.vue';
import ChartBars from './_components/ChartBars/ChartBars.vue';
import ChartGrid from './_components/ChartGrid/ChartGrid.vue';
import ChartLine from './_components/ChartLine/ChartLine.vue';
import ChartValueLabels from './_components/ChartValueLabels/ChartValueLabels.vue';
import type { ChartProps } from './chart.types';
import { useChartProvider } from './useChart';

const props = defineProps<ChartProps>();
const {
  chartProps,
  svgProps,
  type,
  showGrid,
  showAxis,
  showValueLabels,
  margin,
  data,
  valueFormatter,
  ariaLabel,
} = useChartProvider(props);
</script>

<template>
  <figure v-bind="chartProps">
    <svg v-bind="svgProps">
      <title>{{ ariaLabel }}</title>
      <g :transform="`translate(${margin.left} ${margin.top})`">
        <ChartGrid v-if="showGrid" />
        <ChartAxis v-if="showAxis" orientation="y" />
        <ChartAxis v-if="showAxis" orientation="x" />
        <ChartBars v-if="type === 'bar'" />
        <ChartLine v-if="type === 'line'" />
        <ChartValueLabels v-if="showValueLabels" />
      </g>
    </svg>
    <table class="sr-only">
      <caption>{{ ariaLabel }}</caption>
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="point in data" :key="point.label">
          <th scope="row">{{ point.label }}</th>
          <td>{{ valueFormatter(point.value) }}</td>
        </tr>
      </tbody>
    </table>
  </figure>
</template>
