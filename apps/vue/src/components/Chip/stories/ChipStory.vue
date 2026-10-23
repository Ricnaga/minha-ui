<script setup lang="ts">
import { Chip } from '../';
import type { ChipProps } from '../chip.types';

type ChipStoryProps = ChipProps & { children?: string };

const props = withDefaults(defineProps<ChipStoryProps>(), {
  children: 'Chip',
  color: undefined,
  size: undefined,
  rounded: undefined,
  class: undefined,
});
</script>

<template>
  <Chip
    :color="props.color"
    :size="props.size"
    :rounded="props.rounded"
    :class="props.class"
    :on-remove="props.onRemove"
  >
    {{ props.children }}
  </Chip>
</template>
