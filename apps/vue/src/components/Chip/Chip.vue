<script setup lang="ts">
import { useSlots } from 'vue';

import { PhX } from '@phosphor-icons/vue';

import type { ChipProps } from './chip.types';
import { useChip } from './useChip';

const props = defineProps<ChipProps>();
const slots = useSlots();

const { chipProps, hasRemove, removeButtonProps } = useChip(props, slots);
</script>

<template>
  <span v-bind="chipProps">
    <slot />
    <button v-if="hasRemove" v-bind="removeButtonProps">
      <PhX aria-hidden="true" />
    </button>
  </span>
</template>
