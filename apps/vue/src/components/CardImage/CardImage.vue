<script setup lang="ts">
import type { CardImageProps } from './card-image.types';
import { useCardImage } from './useCardImage';

const props = defineProps<CardImageProps>();

const { cardImageProps } = useCardImage(props);
</script>

<template>
  <img v-bind="cardImageProps">
</template>
