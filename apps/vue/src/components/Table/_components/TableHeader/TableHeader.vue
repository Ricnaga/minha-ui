<script setup lang="ts">
import TableHead from '../../../TableHead/TableHead.vue';
import TableRow from '../../../TableRow/TableRow.vue';
import { useTableConfig } from '../../../TableProvider/useTableProvider';
</script>

<template>
  <thead>
    <TableRow>
      <TableHead v-for="column in useTableConfig().columns" :key="column.id" :align="column.align">
        {{ column.label }}
      </TableHead>
    </TableRow>
  </thead>
</template>
