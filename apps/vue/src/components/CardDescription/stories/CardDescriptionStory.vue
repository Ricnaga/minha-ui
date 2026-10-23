<script setup lang="ts">
import { CardDescription } from '../';
import type { CardDescriptionProps } from '../card-description.types';

type CardDescriptionStoryProps = CardDescriptionProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardDescriptionStoryProps>(), {
  children: 'Conteúdo do card description',
  size: undefined,
  weight: undefined,
  color: undefined,
  align: undefined,
  class: undefined,
});
</script>

<template>
  <CardDescription
    :size="props.size"
    :weight="props.weight"
    :color="props.color"
    :align="props.align"
    :class="props.class"
  >
    {{ props.children }}
  </CardDescription>
</template>
