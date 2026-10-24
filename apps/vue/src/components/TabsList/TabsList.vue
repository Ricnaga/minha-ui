<script setup lang="ts">
import { useTabsList } from './useTabsList';
import type { UseTabsListProps } from './tabs-list.types';

const props = defineProps<UseTabsListProps>();
const { tabsListProps } = useTabsList(props);
const tl = tabsListProps as unknown as Record<string, any>;
</script>

<template>
  <div :ref="tl.ref" :role="tl.role" @keydown="tl.onKeydown" :class="tl.class">
    <slot />
  </div>
</template>
