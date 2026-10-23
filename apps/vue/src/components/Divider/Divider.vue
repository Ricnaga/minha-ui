<script setup lang="ts">
import type { DividerProps } from './divider.types';
import { useDivider } from './useDivider';

const props = defineProps<DividerProps>();

const { dividerProps } = useDivider(props);
</script>

<template>
  <div v-bind="dividerProps" />
</template>
