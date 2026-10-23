<script setup lang="ts">
import { Card } from '../';
import type { CardProps } from '../card.types';

type CardStoryProps = CardProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardStoryProps>(), {
  children: 'Conteúdo do Card',
  radius: undefined,
  shadow: undefined,
  class: undefined,
});
</script>

<template>
  <Card :radius="props.radius" :shadow="props.shadow" :class="props.class">
    {{ props.children }}
  </Card>
</template>
