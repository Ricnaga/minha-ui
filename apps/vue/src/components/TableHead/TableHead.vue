<script setup lang="ts">
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TableHeadProps } from './table-head.types';

const props = defineProps<TableHeadProps & { className?: string }>();
const { size, bordered } = useTableConfig();
const { head } = table({ size, bordered });
</script>

<template>
  <th :class="head({ className: props.className })">
    <slot />
  </th>
</template>
