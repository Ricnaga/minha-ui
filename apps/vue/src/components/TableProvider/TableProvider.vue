<script setup lang="ts">
import { useTableProvider } from './useTableProvider';
import type { TableProviderProps } from './table-provider.types';

const props = defineProps<TableProviderProps<any>>();
useTableProvider(props);
</script>

<template>
  <slot />
</template>
