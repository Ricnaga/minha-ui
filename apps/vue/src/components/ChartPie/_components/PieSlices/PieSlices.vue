<script setup lang="ts">
import type { PieSlicesProps } from '../../chart-pie.types';
import { usePieSlices } from './usePieSlices';

const props = defineProps<PieSlicesProps>();
const { items, transform, layout } = usePieSlices(props);
</script>

<template>
  <g data-part="slices" :transform="transform">
    <circle
      v-for="item in items"
      :key="item.label"
      :cx="layout.center"
      :cy="layout.center"
      :r="layout.radius"
      :stroke-width="layout.strokeWidth"
      pathLength="100"
      :style="item.style"
      :class="item.class"
    />
  </g>
</template>
