<script setup lang="ts">
import { usePopoverTrigger } from './usePopoverTrigger';
import type { UsePopoverTriggerProps } from './popover-trigger.types';

const props = defineProps<UsePopoverTriggerProps>();
const { onPopoverChange } = usePopoverTrigger(props);
</script>

<template>
  <div @click="onPopoverChange">
    <slot />
  </div>
</template>
