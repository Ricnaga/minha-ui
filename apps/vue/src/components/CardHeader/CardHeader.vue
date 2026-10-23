<script setup lang="ts">
import type { CardHeaderProps } from './card-header.types';
import { useCardHeader } from './useCardHeader';

const props = defineProps<CardHeaderProps>();

const { cardHeaderProps } = useCardHeader(props);
</script>

<template>
  <header v-bind="cardHeaderProps">
    <slot />
  </header>
</template>
