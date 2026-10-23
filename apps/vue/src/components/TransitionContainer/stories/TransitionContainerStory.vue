<script setup lang="ts">
import { ref, watch } from 'vue';

import { TransitionContainer } from '../';
import type { TransitionContainerProps } from '../transition-container.types';

type TransitionContainerStoryProps = TransitionContainerProps & {
  children?: string;
};

const props = withDefaults(defineProps<TransitionContainerStoryProps>(), {
  animation: undefined,
  children: 'Conteúdo animado',
  class: undefined,
  'aria-hidden': undefined,
  inert: undefined,
});

const isVisible = ref(props.isOpen);

watch(
  () => props.isOpen,
  (value) => {
    isVisible.value = value;
  },
);
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <button
      type="button"
      class="rounded bg-neutral-700 px-3 py-1 text-sm text-neutral-100"
      @click="isVisible = !isVisible"
    >
      Alternar
    </button>
    <div
      class="flex h-40 w-72 items-center justify-center overflow-hidden rounded border border-dashed border-neutral-600"
    >
      <TransitionContainer
        :is-open="isVisible"
        :animation="props.animation"
        data-testid="transition-container"
      >
        <span class="rounded bg-neutral-800 px-6 py-4 text-neutral-100">
          {{ props.children }}
        </span>
      </TransitionContainer>
    </div>
  </div>
</template>
