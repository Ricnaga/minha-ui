<script setup lang="ts">
import { CardTitle } from '../';
import type { CardTitleProps } from '../card-title.types';

type CardTitleStoryProps = CardTitleProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardTitleStoryProps>(), {
  children: 'Conteúdo do card title',
  as: undefined,
  size: undefined,
  weight: undefined,
  color: undefined,
  align: undefined,
  class: undefined,
});
</script>

<template>
  <CardTitle
    :as="props.as"
    :size="props.size"
    :weight="props.weight"
    :color="props.color"
    :align="props.align"
    :class="props.class"
  >
    {{ props.children }}
  </CardTitle>
</template>
