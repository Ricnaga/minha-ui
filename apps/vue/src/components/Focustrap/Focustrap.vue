<script setup lang="ts">
import type { FocustrapProps } from './focustrap.types';
import { useFocustrap } from './useFocustrap';

const props = defineProps<FocustrapProps>();
const { focustrapProps, containerRef } = useFocustrap(props);
</script>

<template>
  <div v-bind="focustrapProps" ref="containerRef">
    <slot />
  </div>
</template>
