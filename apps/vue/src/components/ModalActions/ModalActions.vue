<script setup lang="ts">
import Button from '../Button/Button.vue';
import { useModalActions } from './useModalActions';
import type { ModalActionsProps } from './modal-actions.types';

const props = defineProps<ModalActionsProps>();
const { modalActionsProps, onClose } = useModalActions(props);
</script>

<template>
  <div v-bind="modalActionsProps">
    <Button color="error" variant="outline" @click="onClose">Cancelar</Button>
    <Button type="submit" color="success">Confirmar</Button>
  </div>
</template>
