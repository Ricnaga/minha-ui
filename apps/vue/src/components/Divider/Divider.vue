<script setup lang="ts">
import type { DividerProps } from './divider.types';
import { useDivider } from './useDivider';

// Os atributos de acessibilidade (`role`, `aria-*`) são definidos pelo
// composable e precisam vencer os atributos repassados pelo consumidor.
defineOptions({ inheritAttrs: false });

const props = defineProps<DividerProps>();

const { dividerProps } = useDivider(props);
</script>

<template>
  <div v-bind="{ ...$attrs, ...dividerProps }" />
</template>
