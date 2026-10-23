<script setup lang="ts">
import type { CardProps } from './card.types';
import { useCard } from './useCard';

const props = defineProps<CardProps>();

const { cardProps } = useCard(props);
</script>

<template>
  <article v-bind="cardProps">
    <slot />
  </article>
</template>
