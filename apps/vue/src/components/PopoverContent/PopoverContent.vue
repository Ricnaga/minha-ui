<script setup lang="ts">
import { usePopoverContent } from './usePopoverContent';
import type { PopoverContentProps } from './popover-content.types';

const props = defineProps<PopoverContentProps>();
const { popoverContentProps } = usePopoverContent(props);
</script>

<template>
  <div v-bind="popoverContentProps">
    <slot />
  </div>
</template>
