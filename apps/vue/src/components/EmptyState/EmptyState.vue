<script setup lang="ts">
import { PhTray } from '@phosphor-icons/vue';
import { h } from 'vue';

import type { EmptyStateProps } from './empty-state.types';
import { useEmptyState } from './useEmptyState';

const DefaultImage = h(PhTray, { size: 48, 'aria-hidden': 'true' });

const props = defineProps<EmptyStateProps>();
const slots = defineSlots<{
  image?: () => unknown;
  title?: () => unknown;
  message?: () => unknown;
  action?: () => unknown;
  default?: () => unknown;
}>();

const {
  rootProps,
  imageProps,
  titleProps,
  messageProps,
  actionProps,
  message,
} = useEmptyState(props);
</script>

<template>
  <div v-bind="rootProps">
    <div
      v-if="slots.image !== undefined || props.image !== undefined"
      v-bind="imageProps"
    >
      <slot name="image">
        <component
          :is="props.image === undefined ? DefaultImage : props.image"
        />
      </slot>
    </div>
    <p
      v-if="slots.title !== undefined || props.title !== undefined"
      v-bind="titleProps"
    >
      <slot name="title">{{ props.title }}</slot>
    </p>
    <p v-if="message !== null && message !== undefined" v-bind="messageProps">
      <slot name="message">
        <component :is="message" v-if="typeof message === 'object'" />
        <template v-else>{{ message }}</template>
      </slot>
    </p>
    <div
      v-if="slots.action !== undefined || props.action !== undefined"
      v-bind="actionProps"
    >
      <slot name="action">{{ props.action }}</slot>
    </div>
  </div>
</template>
