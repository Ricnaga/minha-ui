<script setup lang="ts">
import { table } from '@/theme';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TableFooterProps } from './table-footer.types';

const props = defineProps<TableFooterProps & { className?: string }>();
const { bordered } = useTableConfig();
const { footer } = table({ bordered });
</script>

<template>
  <tfoot :class="footer({ className: props.className })">
    <slot />
  </tfoot>
</template>
