<script setup lang="ts">
import type { CardActionsProps } from './card-actions.types';
import { useCardActions } from './useCardActions';

const props = defineProps<CardActionsProps>();

const { cardActionsProps } = useCardActions(props);
</script>

<template>
  <footer v-bind="cardActionsProps">
    <slot />
  </footer>
</template>
