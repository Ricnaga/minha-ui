<script setup lang="ts">
import { CardFooter } from '../';
import type { CardFooterProps } from '../card-footer.types';

type CardFooterStoryProps = CardFooterProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardFooterStoryProps>(), {
  children: 'Conteúdo do Card Footer',
  align: undefined,
  wrap: undefined,
  divider: undefined,
  class: undefined,
});
</script>

<template>
  <CardFooter
    :align="props.align"
    :wrap="props.wrap"
    :divider="props.divider"
    :class="props.class"
  >
    {{ props.children }}
  </CardFooter>
</template>
