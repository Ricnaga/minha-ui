<script setup lang="ts">
import type { SkeletonProps } from './skeleton.types';
import { useSkeleton } from './useSkeleton';

// Os atributos de acessibilidade (`role`, `aria-*`) são definidos pelo
// composable e precisam vencer os atributos repassados pelo consumidor.
defineOptions({ inheritAttrs: false });

const props = defineProps<SkeletonProps>();

const { skeletonProps } = useSkeleton(props);
</script>

<template>
  <div v-bind="{ ...$attrs, ...skeletonProps }" />
</template>
