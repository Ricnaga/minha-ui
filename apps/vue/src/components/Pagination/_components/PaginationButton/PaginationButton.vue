<script setup lang="ts">
import { paginationButton } from '@/theme';
import type { PaginationButtonProps } from '../../pagination.types';

const props = defineProps<PaginationButtonProps>();
function handleClick() {
  if ((props as any).disabled) return;
  (props as any).onPageChange?.();
}
</script>

<template>
  <button v-bind="(props as any)" :class="paginationButton()" @click="handleClick">
    <slot />
  </button>
</template>
