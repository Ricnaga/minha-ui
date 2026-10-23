<script setup lang="ts">
import { CardBody } from '../';
import type { CardBodyProps } from '../card-body.types';

type CardBodyStoryProps = CardBodyProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardBodyStoryProps>(), {
  children: 'Conteúdo do Card Body',
  padding: undefined,
  gap: undefined,
  background: undefined,
  class: undefined,
});
</script>

<template>
  <CardBody
    :padding="props.padding"
    :gap="props.gap"
    :background="props.background"
    :class="props.class"
  >
    {{ props.children }}
  </CardBody>
</template>
