<script setup lang="ts">
import PieLegend from './_components/PieLegend/PieLegend.vue';
import PieSlices from './_components/PieSlices/PieSlices.vue';
import type { ChartPieProps } from './chart-pie.types';
import { useChartPie } from './useChartPie';

const props = defineProps<ChartPieProps>();
const { figureProps, svgProps, layout, slices, data, valueFormatter, ariaLabel } = useChartPie(props);
</script>

<template>
  <figure v-bind="figureProps">
    <svg v-bind="svgProps">
      <title>{{ ariaLabel }}</title>
      <PieSlices :slices="slices" :layout="layout" />
    </svg>
    <PieLegend :slices="slices" :value-formatter="valueFormatter" />
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
