<script setup lang="ts">
import { Spinner } from '../Spinner';
import type { ButtonProps } from './button.types';
import { useButton } from './useButton';

const props = defineProps<ButtonProps>();

const { buttonProps, isLoading, labelProps } = useButton(props);
</script>

<template>
  <button v-bind="buttonProps">
    <template v-if="isLoading">
      <Spinner :color="color" class="size-4" />
      <span v-bind="labelProps"><slot /></span>
    </template>
    <slot v-else />
  </button>
</template>
