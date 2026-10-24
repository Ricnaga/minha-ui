<script setup lang="ts">
import type { BreadcrumbListProps } from './breadcrumb-list.types';
import { useBreadcrumbList } from './useBreadcrumbList';

const props = defineProps<BreadcrumbListProps>();

const { listProps } = useBreadcrumbList(props);
</script>

<template>
  <ol v-bind="listProps">
    <slot />
  </ol>
</template>
