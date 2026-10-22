<script setup lang="ts">
import { provide, ref } from 'vue';

import { demoContext } from './demo-context';

const currentValue = ref('Hello Storybook!');

provide(demoContext, {
  get value() {
    return currentValue.value;
  },
  setValue(nextValue: string) {
    currentValue.value = nextValue;
  },
});
</script>

<template>
  <slot />
</template>
