<script setup lang="ts">
import type { CardSubtitleProps } from './card-subtitle.types';
import { useCardSubtitle } from './useCardSubtitle';

const props = defineProps<CardSubtitleProps>();

const { cardSubtitleProps } = useCardSubtitle(props);
</script>

<template>
  <p v-bind="cardSubtitleProps">
    <slot />
  </p>
</template>
