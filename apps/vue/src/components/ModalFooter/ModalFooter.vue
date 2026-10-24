<script setup lang="ts">
import { useModalFooter } from './useModalFooter';
import type { ModalFooterProps } from './modal-footer.types';

const props = defineProps<ModalFooterProps>();
const { modalFooterProps } = useModalFooter(props);
</script>

<template>
  <footer v-bind="modalFooterProps">
    <slot />
  </footer>
</template>
