<script setup lang="ts">
import { ref } from 'vue';
import { useDebounce } from '../';

const value = ref('');
const debouncedValue = useDebounce(value, 800);
</script>

<template>
  <div class="p-10 w-[400px] flex flex-col gap-4">
    <p class="text-sm text-neutral-700">
      Digite no input. O valor <strong>debounced</strong> só atualiza após
      800ms sem digitação.
    </p>

    <input
      class="border p-2 rounded"
      placeholder="Digite algo..."
      v-model="value"
    />

    <div class="mt-4 flex flex-col gap-2 text-sm">
      <p>
        <strong>Valor atual:</strong>
        <span class="text-blue-600">{{ value || '—' }}</span>
      </p>

      <p>
        <strong>Valor debounced:</strong>
        <span data-testid="debounced-value" class="text-green-700">
          {{ debouncedValue || '—' }}
        </span>
      </p>
    </div>
  </div>
</template>
