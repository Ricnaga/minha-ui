<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue';

import type { BreadcrumbSeparatorProps } from './breadcrumb-separator.types';
import { useBreadcrumbSeparator } from './useBreadcrumbSeparator';

const props = defineProps<BreadcrumbSeparatorProps>();

const { separatorProps, content } = useBreadcrumbSeparator(props);
</script>

<template>
  <li v-bind="separatorProps">
    <slot>
      <template v-if="content !== undefined">{{ content }}</template>
      <PhCaretRight v-else aria-hidden="true" />
    </slot>
  </li>
</template>
