<script setup lang="ts">
import { table } from '@/theme';
import TableRow from '../../../TableRow/TableRow.vue';
import { useTableConfig } from '../../../TableProvider/useTableProvider';

const { columns, size, bordered, stickyHeader } = useTableConfig();
const { header, headerRow, head } = table({
  size,
  bordered,
  stickyHeader,
});
</script>

<template>
  <thead :class="header()">
    <TableRow :class="headerRow()">
      <th
        v-for="column in columns"
        :key="column.id"
        :scope="'col'"
        :class="head({ align: column.align, className: (column as any).className })"
        v-bind="column as any"
      >
        {{ column.label }}
      </th>
    </TableRow>
  </thead>
</template>
