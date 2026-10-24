<script setup lang="ts" generic="T">
import { computed } from 'vue';
import { table } from '@/theme';
import { useTableData } from '../TableProvider/useTableProvider';
import type { TableBodyProps } from './table-body.types';

const props = withDefaults(defineProps<TableBodyProps<T>>(), {
  children: undefined,
  className: '',
});

const context = useTableData<T>();
const { body } = table();

const data = computed(() => props.data ?? context?.data ?? []);
const keyExtractor = computed(() => props.keyExtractor ?? context?.keyExtractor);
</script>

<template>
  <tbody :class="body({ className: props.className })">
    <template v-if="typeof props.children === 'function'">
      <template v-for="(item, index) in data" :key="keyExtractor?.(item, index) ?? index">
        <component :is="() => props.children?.(item, index)" />
      </template>
    </template>
    <slot v-else />
  </tbody>
</template>
