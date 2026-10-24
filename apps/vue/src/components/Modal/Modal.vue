<script setup lang="ts">
import Backdrop from '../Backdrop/Backdrop.vue';
import ModalContainer from '../ModalContainer/ModalContainer.vue';
import { useModalProvider } from './useModal';
import type { UseModalProviderProps } from './modal.types';

const props = defineProps<UseModalProviderProps>();
const { isOpen, onClose, padding, radius, shadow } = useModalProvider(props);
</script>

<template>
  <Backdrop :is-open="isOpen" :on-close="onClose">
    <ModalContainer :padding="padding" :radius="radius" :shadow="shadow">
      <slot />
    </ModalContainer>
  </Backdrop>
</template>
