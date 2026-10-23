<script setup lang="ts">
import type { CardBodyProps } from './card-body.types';
import { useCardBody } from './useCardBody';

const props = defineProps<CardBodyProps>();

const { cardBodyProps } = useCardBody(props);
</script>

<template>
  <div v-bind="cardBodyProps">
    <slot />
  </div>
</template>
