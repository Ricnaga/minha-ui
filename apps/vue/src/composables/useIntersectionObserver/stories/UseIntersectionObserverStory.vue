<script setup lang="ts">
import { useIntersectionObserver } from '../';

const { ref: targetRef, isIntersecting } = useIntersectionObserver({
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
  once: false,
});
</script>

<template>
  <div class="h-[200vh] p-12">
    <p class="mb-6 text-lg text-gray-700">
      Scroll para ver o elemento observável
    </p>

    <div
      :ref="targetRef as any"
      :class="[
        'mt-[150vh] h-24 flex items-center justify-center font-bold text-white transition-colors duration-300',
        isIntersecting ? 'bg-green-700' : 'bg-red-600',
      ]"
    >
      {{ isIntersecting ? 'Visível' : 'Fora da tela' }}
    </div>
  </div>
</template>
