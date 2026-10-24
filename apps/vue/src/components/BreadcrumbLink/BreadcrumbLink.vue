<script setup lang="ts">
import type { BreadcrumbLinkProps } from './breadcrumb-link.types';
import { useBreadcrumbLink } from './useBreadcrumbLink';

const props = defineProps<BreadcrumbLinkProps>();

const { linkProps } = useBreadcrumbLink(props);
</script>

<template>
  <a v-bind="linkProps">
    <slot />
  </a>
</template>
