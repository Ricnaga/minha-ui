<script setup lang="ts">
import { Spinner } from '../Spinner';

import type { BackdropProps } from './backdrop.types';
import { useBackdrop } from './useBackdrop';

const props = defineProps<BackdropProps>();

const { backdropProps, wrapperProps } = useBackdrop(props);
</script>

<template>
  <div v-bind="backdropProps">
    <slot />
    <div v-if="props.isLoading" v-bind="wrapperProps">
      <Spinner color="primary" thickness="lg" class="size-20" />
    </div>
  </div>
</template>
