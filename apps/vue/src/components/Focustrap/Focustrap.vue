<script setup lang="ts">
import type { FocustrapProps } from './focustrap.types';
import { useFocustrap } from './useFocustrap';

const props = defineProps<FocustrapProps>();
useFocustrap(props);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
