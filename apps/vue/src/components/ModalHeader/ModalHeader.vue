<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue';
import { useModalHeader } from './useModalHeader';
import type { ModalHeaderProps } from './modal-header.types';

const props = defineProps<ModalHeaderProps>();
const { modalHeaderProps, closeButtonProps } = useModalHeader(props);
const cb = closeButtonProps as unknown as Record<string, unknown>;
</script>

<template>
  <header v-bind="modalHeaderProps">
    <slot />
    <button :type="(cb.type as 'button' | 'submit' | 'reset' | undefined)" :aria-label="cb['aria-label'] as string | undefined" :class="cb.class as string | undefined" @click="cb.onClick as any">
      <PhX />
    </button>
  </header>
</template>
