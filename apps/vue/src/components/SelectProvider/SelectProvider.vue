<script setup lang="ts">
import { useSelectProvider } from './useSelectProvider';
import type { UseSelectProviderProps } from './select-provider.types';

const props = defineProps<UseSelectProviderProps>();
useSelectProvider(props);
</script>

<template>
  <slot />
</template>
