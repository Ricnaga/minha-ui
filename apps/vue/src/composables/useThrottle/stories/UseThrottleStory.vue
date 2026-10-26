<script setup lang="ts">
import { ref } from 'vue';
import { useThrottle } from '../';

const count = ref(0);
const throttledCount = ref(0);

const updateThrottled = useThrottle(() => {
  throttledCount.value = count.value;
}, 800);

const increment = () => {
  count.value++;
  updateThrottled();
};
</script>

<template>
  <div class="p-10 w-[400px] flex flex-col gap-4">
    <p class="text-sm text-neutral-700">
      Clique no botão. O valor <strong>throttled</strong> é atualizado no
      máximo uma vez a cada 800ms.
    </p>

    <button
      class="border px-4 py-2 rounded bg-blue-500 text-white"
      @click="increment"
    >
      Incrementar
    </button>

    <div class="mt-4 flex flex-col gap-2 text-sm">
      <p>
        <strong>Cliques:</strong>
        <span data-testid="click-count">{{ count }}</span>
      </p>

      <p>
        <strong>Throttled:</strong>
        <span data-testid="throttled-count">{{ throttledCount }}</span>
      </p>
    </div>
  </div>
</template>
