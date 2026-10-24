<script setup lang="ts">
import { usePopoverProvider } from './usePopover';
import type { UsePopoverProviderProps } from './popover.types';

const props = defineProps<UsePopoverProviderProps>();
usePopoverProvider(props);
</script>

<template>
  <div class="relative">
    <slot />
  </div>
</template>
