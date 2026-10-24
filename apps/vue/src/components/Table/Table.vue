<script setup lang="ts" generic="T">
import { useTableProvider } from '../TableProvider/useTableProvider';
import type { TableProps } from './table.types';
import TableLayout from './_components/TableLayout/TableLayout.vue';

const props = defineProps<TableProps<T>>();
useTableProvider(props);
</script>

<template>
  <TableLayout :class-name="props.className">
    <slot />
  </TableLayout>
</template>
