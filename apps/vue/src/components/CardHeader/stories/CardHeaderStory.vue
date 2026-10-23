<script setup lang="ts">
import { CardHeader } from '../';
import type { CardHeaderProps } from '../card-header.types';

type CardHeaderStoryProps = CardHeaderProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardHeaderStoryProps>(), {
  children: 'Conteúdo do Card Header',
  align: undefined,
  divider: undefined,
  background: undefined,
  class: undefined,
});
</script>

<template>
  <CardHeader
    :align="props.align"
    :divider="props.divider"
    :background="props.background"
    :class="props.class"
  >
    {{ props.children }}
  </CardHeader>
</template>
