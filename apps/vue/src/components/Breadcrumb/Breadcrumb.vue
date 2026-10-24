<script setup lang="ts">
import type { BreadcrumbProps } from './breadcrumb.types';
import { useBreadcrumbProvider } from './useBreadcrumb';

const props = defineProps<BreadcrumbProps>();

const { breadcrumbProps } = useBreadcrumbProvider(props);
</script>

<template>
  <nav v-bind="breadcrumbProps">
    <slot />
  </nav>
</template>
