<script setup lang="ts">
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';
import { pagination } from '@/theme';
import { PaginationButton } from './_components/PaginationButton';
import { PaginationControls } from './_components/PaginationControls';
import type { PaginationProps } from './pagination.types';
import { usePagination } from './usePagination';

const { base, description, icons, items, wrapper } = pagination();
const props = defineProps<PaginationProps>();
const { paginationItems, handlePageChange, currentPage, totalPages } = usePagination(props);
</script>

<template>
  <div :class="base()">
    <div :class="wrapper()">
      <PaginationButton aria-label="Página anterior" @page-change="() => handlePageChange(currentPage - 1)">
        <PhCaretLeft :class="icons()" />
      </PaginationButton>
      <div :class="items()">
        <PaginationControls
          v-for="item in paginationItems"
          :key="item.toString()"
          :item="item"
          :current-page="currentPage"
          @page-change="() => typeof item === 'number' && handlePageChange(item)"
        />
      </div>
      <PaginationButton aria-label="Próxima página" @page-change="() => handlePageChange(currentPage + 1)">
        <PhCaretRight :class="icons()" />
      </PaginationButton>
    </div>
    <div :class="description()">Página {{ currentPage }} de {{ totalPages }}</div>
  </div>
</template>
