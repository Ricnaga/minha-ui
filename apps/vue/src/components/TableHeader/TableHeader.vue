<script setup lang="ts">
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TableHeaderProps } from './table-header.types';

const props = defineProps<TableHeaderProps & { className?: string }>();
const { bordered } = useTableConfig();
const { header } = table({ bordered });
</script>

<template>
  <thead :class="header({ className: props.className })">
    <slot />
  </thead>
</template>
