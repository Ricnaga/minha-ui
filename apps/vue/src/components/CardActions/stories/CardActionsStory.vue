<script setup lang="ts">
import { CardActions } from '../';
import type { CardActionsProps } from '../card-actions.types';

type CardActionsStoryProps = CardActionsProps & {
  children?: string;
};

const props = withDefaults(defineProps<CardActionsStoryProps>(), {
  children: 'Conteúdo do Card Actions',
  align: undefined,
  direction: undefined,
  wrap: undefined,
  divider: undefined,
  class: undefined,
});
</script>

<template>
  <CardActions
    :align="props.align"
    :direction="props.direction"
    :wrap="props.wrap"
    :divider="props.divider"
    :class="props.class"
  >
    {{ props.children }}
  </CardActions>
</template>
