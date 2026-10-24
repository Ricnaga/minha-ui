<script setup lang="ts">
import { computed } from 'vue';
import EmptyState from '../../../EmptyState/EmptyState.vue';
import ErrorState from '../../../ErrorState/ErrorState.vue';
import Skeleton from '../../../Skeleton/Skeleton.vue';
import TableBody from '../../../TableBody/TableBody.vue';
import TableCell from '../../../TableCell/TableCell.vue';
import TableRow from '../../../TableRow/TableRow.vue';
import { table } from '@/theme';
import { useTableConfig, useTableData } from '../../../TableProvider/useTableProvider';
import type { TableStatusValue } from '../../table.types';

const props = defineProps<{ status?: TableStatusValue | null }>();
const { columns } = useTableConfig();
const dataCtx = useTableData();
const { stateCell } = table();

const data = computed(() => dataCtx?.data ?? []);
const isLoading = computed(() => dataCtx?.isLoading ?? false);
const isError = computed(() => dataCtx?.isError ?? false);
const loadingProps = computed(() => dataCtx?.loadingProps);
const emptyProps = computed(() => dataCtx?.emptyProps);
const errorProps = computed(() => dataCtx?.errorProps);
</script>

<template>
  <TableBody v-if="props.status == null">
    <slot />
  </TableBody>
  <TableBody v-else-if="props.status === 'loading'">
    <TableRow v-if="loadingProps?.fallback">
      <TableCell :colspan="columns.length">
        <component :is="loadingProps.fallback" />
      </TableCell>
    </TableRow>
    <TableRow v-else>
      <TableCell :colspan="columns.length" :class="stateCell()">
        <Skeleton v-for="i in (loadingProps?.rows ?? 3)" :key="i" height="2.5rem" class="mb-2" />
      </TableCell>
    </TableRow>
  </TableBody>
  <TableBody v-else-if="props.status === 'empty'">
    <TableRow>
      <TableCell :colspan="columns.length" :class="stateCell()">
        <EmptyState v-bind="emptyProps || {}" />
      </TableCell>
    </TableRow>
  </TableBody>
  <TableBody v-else-if="props.status === 'error'">
    <TableRow>
      <TableCell :colspan="columns.length" :class="stateCell()">
        <ErrorState v-bind="errorProps || {}" />
      </TableCell>
    </TableRow>
  </TableBody>
</template>
