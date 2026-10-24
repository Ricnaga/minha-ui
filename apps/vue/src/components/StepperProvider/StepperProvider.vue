<script setup lang="ts">
import { useStepperProvider } from './useStepperProvider';
import type { StepperProviderProps } from './stepper-provider.types';

const props = defineProps<StepperProviderProps>();
useStepperProvider(props);
</script>

<template>
  <slot />
</template>
