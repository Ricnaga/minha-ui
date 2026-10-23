<script setup lang="ts">
import type { CardFooterProps } from './card-footer.types';
import { useCardFooter } from './useCardFooter';

const props = defineProps<CardFooterProps>();

const { cardFooterProps } = useCardFooter(props);
</script>

<template>
  <div v-bind="cardFooterProps">
    <slot />
  </div>
</template>
