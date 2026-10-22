<script setup lang="ts">
import { Button } from '../';
import type { ButtonProps } from '../button.types';

type ButtonStoryProps = ButtonProps & {
  children?: string;
  onClick?: () => void;
};

const props = withDefaults(defineProps<ButtonStoryProps>(), {
  children: 'Button',
  variant: undefined,
  color: undefined,
  size: undefined,
  radius: undefined,
  isLoading: undefined,
  disabled: undefined,
  type: undefined,
  onClick: undefined,
});
</script>

<template>
  <Button
    :variant="props.variant"
    :color="props.color"
    :size="props.size"
    :radius="props.radius"
    :is-loading="props.isLoading"
    :disabled="props.disabled"
    :type="props.type"
    @click="props.onClick"
  >
    {{ props.children }}
  </Button>
</template>
