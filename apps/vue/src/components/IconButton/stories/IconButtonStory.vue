<script setup lang="ts">
import { PhInfo } from '@phosphor-icons/vue';

import { IconButton } from '../';
import type { IconButtonProps } from '../icon-button.types';

type IconButtonStoryProps = IconButtonProps;

const props = withDefaults(defineProps<IconButtonStoryProps>(), {
  size: undefined,
  radius: undefined,
  variant: undefined,
  color: undefined,
  isLoading: false,
  disabled: false,
  class: undefined,
  type: undefined,
});
</script>

<template>
  <IconButton
    :size="props.size"
    :radius="props.radius"
    :variant="props.variant"
    :color="props.color"
    :is-loading="props.isLoading"
    :disabled="props.disabled"
    :class="props.class"
    :type="props.type"
    aria-label="Informações"
    :on-click="props.onClick"
  >
    <PhInfo class="size-6" />
  </IconButton>
</template>
