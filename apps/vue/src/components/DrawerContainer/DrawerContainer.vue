<script setup lang="ts">
import Backdrop from '../Backdrop/Backdrop.vue';
import { useDrawerContainer } from './useDrawerContainer';
import type { DrawerContainerProps } from './drawer-container.types';

const props = defineProps<DrawerContainerProps>();
const { drawerContainerProps, isOpen, onClose } = useDrawerContainer(props);
const cp = drawerContainerProps as unknown as Record<string, any>;
</script>

<template>
  <Backdrop :is-open="isOpen" :on-close="onClose">
    <div :role="cp.role" :aria-modal="cp['aria-modal']" :aria-label="cp['aria-label']" :class="cp.class">
      <slot />
    </div>
  </Backdrop>
</template>
