<script setup lang="ts">
import { CardSubtitle } from '../';
import type { CardSubtitleProps } from '../card-subtitle.types';

type CardSubtitleStoryProps = CardSubtitleProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardSubtitleStoryProps>(), {
  children: 'Conteúdo do card sub title',
  size: undefined,
  weight: undefined,
  color: undefined,
  align: undefined,
  class: undefined,
});
</script>

<template>
  <CardSubtitle
    :size="props.size"
    :weight="props.weight"
    :color="props.color"
    :align="props.align"
    :class="props.class"
  >
    {{ props.children }}
  </CardSubtitle>
</template>
