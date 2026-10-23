<script setup lang="ts">
import { iconButtonSpinner } from '@/theme';
import { Spinner } from '../Spinner';

import type { IconButtonProps } from './icon-button.types';
import { useIconButton } from './useIconButton';

const props = defineProps<IconButtonProps>();

const { iconButtonProps, isLoading } = useIconButton(props);
</script>

<template>
  <button v-bind="iconButtonProps">
    <div v-if="isLoading" :class="iconButtonSpinner()">
      <Spinner />
    </div>
    <slot v-else />
  </button>
</template>
