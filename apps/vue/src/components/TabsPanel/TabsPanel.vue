<script setup lang="ts">
import { useTabsPanel } from './useTabsPanel';
import type { UseTabsPanelProps } from './tabs-panel.types';

const props = defineProps<UseTabsPanelProps>();
const { tabsPanelProps } = useTabsPanel(props);
const tp = tabsPanelProps as unknown as Record<string, any>;
</script>

<template>
  <div :id="tp.id" :role="tp.role" :aria-labelledby="tp['aria-labelledby']" :tabindex="tp.tabindex" :data-value="tp['data-value']" :class="tp.class" :style="tp.style">
    <slot />
  </div>
</template>
