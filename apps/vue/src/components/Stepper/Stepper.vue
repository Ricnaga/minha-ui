<script setup lang="ts">
import { stepper } from '@/theme';
import { useStepperContext } from '../StepperProvider';
import StepperItem from '../StepperItem/StepperItem.vue';

const { steps, orientation } = useStepperContext();
const isHorizontal = orientation === 'horizontal';
</script>

<template>
  <div
    :class="stepper({ orientation })"
    role="group"
    aria-label="Etapas"
    :tabindex="isHorizontal ? 0 : undefined"
  >
    <StepperItem
      v-for="(step, index) in steps"
      :key="step.id"
      :index="index"
      :title="step.title"
      :description="step.description"
      :is-last="index === steps.length - 1"
    />
  </div>
</template>
