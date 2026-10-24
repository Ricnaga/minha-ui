<script setup lang="ts">
import { useModalContent } from './useModalContent';
import type { ModalContentProps } from './modal-content.types';

const props = defineProps<ModalContentProps>();
const { modalContentProps } = useModalContent(props);
</script>

<template>
  <div v-bind="modalContentProps">
    <slot />
  </div>
</template>
