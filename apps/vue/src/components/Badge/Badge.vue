<script setup lang="ts">
import type { BadgeProps } from './badge.types';
import { useBadge } from './useBadge';

// O elemento raiz é o envoltório; os atributos nativos pertencem ao badge em si.
defineOptions({ inheritAttrs: false });

const props = defineProps<BadgeProps>();

const { badgeProps, value, wrapperProps } = useBadge(props);
</script>

<template>
  <div v-bind="wrapperProps">
    <slot />
    <div v-if="value" v-bind="{ ...$attrs, ...badgeProps }">{{ value }}</div>
  </div>
</template>
