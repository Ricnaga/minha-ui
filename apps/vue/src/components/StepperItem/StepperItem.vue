<script setup lang="ts">
import { useStepperItem } from './useStepperItem';
import type { StepperItemProps } from './stepper-item.types';

const props = defineProps<StepperItemProps>();
const {
  baseStyles,
  indicatorContainerStyles,
  indicatorContentStyles,
  contentStyles,
  titleStyles,
  descriptionStyles,
  connectorStyles,
  onStepClick,
  isLast,
  state,
  title,
  descriptionText,
} = useStepperItem(props);
</script>

<template>
  <div :class="baseStyles" @click="onStepClick">
    <div :class="indicatorContainerStyles">
      <span :class="indicatorContentStyles">{{ state === 'completed' ? '✓' : index + 1 }}</span>
    </div>
    <div :class="contentStyles">
      <span :class="titleStyles">{{ title }}</span>
      <span v-if="descriptionText" :class="descriptionStyles">{{ descriptionText }}</span>
    </div>
    <div v-if="!isLast" :class="connectorStyles" />
  </div>
</template>
