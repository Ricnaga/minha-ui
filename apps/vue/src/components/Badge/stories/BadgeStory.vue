<script setup lang="ts">
import { Badge } from '../';
import type { BadgeProps } from '../badge.types';

type BadgeStoryProps = BadgeProps & {
  children?: string;
};

const props = withDefaults(defineProps<BadgeStoryProps>(), {
  children: 'Carrinho',
  color: undefined,
  size: undefined,
  position: undefined,
  value: undefined,
});
</script>

<template>
  <Badge
    :color="props.color"
    :size="props.size"
    :position="props.position"
    :value="props.value"
  >
    <button class="rounded-full bg-gray-200 p-2">{{ props.children }}</button>
  </Badge>
</template>
