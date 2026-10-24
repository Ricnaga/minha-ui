<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue';
import { useDrawerHeader } from './useDrawerHeader';
import type { DrawerHeaderProps } from './drawer-header.types';

const props = defineProps<DrawerHeaderProps>();
const { drawerHeaderProps, closeButtonProps } = useDrawerHeader(props);
const cb = closeButtonProps as unknown as Record<string, any>;
</script>

<template>
  <header v-bind="drawerHeaderProps">
    <slot />
    <button :type="cb.type" :aria-label="cb['aria-label']" :class="cb.class" @click="cb.onClick">
      <PhX />
    </button>
  </header>
</template>
