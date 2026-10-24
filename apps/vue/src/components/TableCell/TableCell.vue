<script setup lang="ts">
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TableCellProps } from './table-cell.types';

const props = withDefaults(defineProps<TableCellProps & { className?: string }>(), {
  align: undefined,
});

const { size, bordered } = useTableConfig();
const { cell } = table({ size, bordered, align: props.align });
</script>

<template>
  <td :class="cell({ className: props.className })">
    <slot />
  </td>
</template>
