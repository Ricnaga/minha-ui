<script setup lang="ts">
import { paginationControls } from '@/theme';
import type { PaginationControlsProps } from '../../pagination.types';

const props = defineProps<PaginationControlsProps>();
const { ellipsis, buttonPage } = paginationControls();
const isActive = typeof props.item === 'number' && props.item === props.currentPage;
const isEllipsis = props.item === '...';
function handleClick() {
  if (isEllipsis) return;
  (props as any).onPageChange?.();
}
</script>

<template>
  <button
    v-if="isEllipsis"
    :class="ellipsis()"
    disabled
  >
    <span>...</span>
  </button>
  <button
    v-else
    :class="buttonPage({ isCurrentPage: isActive })"
    @click="handleClick"
  >
    <span>{{ props.item }}</span>
  </button>
</template>
