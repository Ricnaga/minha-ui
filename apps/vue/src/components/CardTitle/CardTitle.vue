<script setup lang="ts">
import type { CardTitleProps } from './card-title.types';
import { useCardTitle } from './useCardTitle';

const props = defineProps<CardTitleProps>();

const { cardTitleProps, tag } = useCardTitle(props);
</script>

<template>
  <component :is="tag" v-bind="cardTitleProps">
    <slot />
  </component>
</template>
