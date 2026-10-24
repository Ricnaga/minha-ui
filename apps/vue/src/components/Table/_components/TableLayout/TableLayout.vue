<script setup lang="ts">
import TablePagination from '../../../TablePagination/TablePagination.vue';
import { useTable } from '../../useTable';
import TableHeader from '../TableHeader/TableHeader.vue';
import TableContent from '../TableContent/TableContent.vue';

const props = defineProps<{ className?: string }>();
const { root, table, status } = useTable();
</script>

<template>
  <div :class="root({ className: props.className })">
    <table :class="table()">
      <TableHeader />
      <TableContent :status="status">
        <slot />
      </TableContent>
    </table>
    <TablePagination />
  </div>
</template>
