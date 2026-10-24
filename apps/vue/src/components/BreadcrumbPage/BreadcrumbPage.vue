<script setup lang="ts">
import type { BreadcrumbPageProps } from './breadcrumb-page.types';
import { useBreadcrumbPage } from './useBreadcrumbPage';

const props = defineProps<BreadcrumbPageProps>();

const { pageProps } = useBreadcrumbPage(props);
</script>

<template>
  <span v-bind="pageProps">
    <slot />
  </span>
</template>
