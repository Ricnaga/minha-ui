<script setup lang="ts">
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TableRowProps } from './table-row.types';

const props = defineProps<TableRowProps & { className?: string }>();
const { striped, hover } = useTableConfig();
const { row } = table({ striped, hover });
</script>

<template>
  <tr :class="row({ className: props.className })">
    <slot />
  </tr>
</template>
