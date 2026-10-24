<script setup lang="ts">
import { useTooltip } from './useTooltip';
import type { TooltipProps } from './tooltip.types';

const props = defineProps<TooltipProps>();
const { wrapperProps, content, tooltipProps } = useTooltip(props);
</script>

<template>
  <div v-bind="wrapperProps">
    <slot />
    <div v-bind="tooltipProps">{{ content }}</div>
  </div>
</template>
