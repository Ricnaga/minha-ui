<script setup lang="ts">
import type { CardDescriptionProps } from './card-description.types';
import { useCardDescription } from './useCardDescription';

const props = defineProps<CardDescriptionProps>();

const { cardDescriptionProps } = useCardDescription(props);
</script>

<template>
  <p v-bind="cardDescriptionProps">
    <slot />
  </p>
</template>
