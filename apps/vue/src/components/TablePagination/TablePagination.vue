<script setup lang="ts">
import { table } from '@/theme';
import Pagination from '../Pagination/Pagination.vue';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TablePaginationProps } from './table-pagination.types';

const props = defineProps<TablePaginationProps & { className?: string }>();
const { pagination } = useTableConfig();
const { paginationWrapper } = table();
</script>

<template>
  <div v-if="pagination.enabled" :class="paginationWrapper({ className: props.className })">
    <Pagination
      :total-pages="pagination.totalPages"
      :current-page="pagination.pageNumber"
      :on-page-change="pagination.onPageChange"
    />
  </div>
</template>
