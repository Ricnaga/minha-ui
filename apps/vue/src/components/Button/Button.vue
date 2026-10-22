<script setup lang="ts">
import { Spinner } from '../Spinner';
import type { ButtonProps } from './button.types';
import { useButton } from './useButton';

const props = defineProps<ButtonProps>();

const { buttonProps, isLoading } = useButton(props);
</script>

<template>
  <button v-bind="buttonProps">
    <Spinner v-if="isLoading" :color="color" class="size-4" />
    <slot v-else />
  </button>
</template>
