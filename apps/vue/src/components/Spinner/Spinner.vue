<script setup lang="ts">
import type { SpinnerProps } from './spinner.types';
import { useSpinner } from './useSpinner';

defineOptions({ inheritAttrs: false });

const props = defineProps<SpinnerProps>();

const { containerProps, wrapperProps, svgProps } = useSpinner(props);
</script>

<template>
  <div v-bind="containerProps">
    <div v-bind="wrapperProps">
      <svg v-bind="{ ...$attrs, ...svgProps }">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  </div>
</template>
