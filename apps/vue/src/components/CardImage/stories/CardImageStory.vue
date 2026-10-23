<script setup lang="ts">
import { CardImage } from '../';
import type { CardImageProps } from '../card-image.types';

type CardImageStoryProps = CardImageProps;

const props = withDefaults(defineProps<CardImageStoryProps>(), {
  rounded: undefined,
  aspect: undefined,
  class: undefined,
  src: undefined,
  alt: undefined,
});
</script>

<template>
  <CardImage
    :rounded="props.rounded"
    :aspect="props.aspect"
    :class="props.class"
    :src="props.src"
    :alt="props.alt"
  />
</template>
