<script setup lang="ts">
import type { BreadcrumbItemProps } from './breadcrumb-item.types';
import { useBreadcrumbItem } from './useBreadcrumbItem';

const props = defineProps<BreadcrumbItemProps>();

const { itemProps } = useBreadcrumbItem(props);
</script>

<template>
  <li v-bind="itemProps">
    <slot />
  </li>
</template>
