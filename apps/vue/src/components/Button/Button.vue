<script setup lang="ts">
import type { ButtonProps } from './button.types';
import { useButton } from './useButton';

const props = defineProps<ButtonProps>();

const { buttonProps } = useButton(props);
</script>

<template>
  <div v-bind="buttonProps">
    <!-- TODO: Implement Button -->
    <slot />
  </div>
</template>
