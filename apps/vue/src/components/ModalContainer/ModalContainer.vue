<script setup lang="ts">
import { useModalContainer } from './useModalContainer';
import type { ModalContainerProps } from './modal-container.types';

const props = defineProps<ModalContainerProps>();
const { modalContainerProps } = useModalContainer(props);
const cp = modalContainerProps as unknown as Record<string, any>;
</script>

<template>
  <div :ref="cp.ref" :role="cp.role" :aria-modal="cp['aria-modal']" :aria-label="cp['aria-label']" :data-testid="cp['data-testid']" :class="cp.class">
    <slot />
  </div>
</template>
