<script setup lang="ts">
import { ref } from 'vue';
import { useCopyToClipboard } from '../';

const { copyToClipboard, isCopied, copiedValue, reset } = useCopyToClipboard();
const customText = ref('Texto para copiar');

const handleCopy = async () => {
  await copyToClipboard(customText.value);
};
</script>

<template>
  <div class="p-10 flex flex-col gap-6">
    <h2 class="text-xl font-bold">useCopyToClipboard</h2>
    <p class="text-gray-600 max-w-md">
      Clique no botão para copiar o texto. O estado `isCopied` muda para
      `true` quando a cópia é bem-sucedida.
    </p>

    <div class="flex flex-col gap-4">
      <div class="flex gap-2 items-center">
        <input
          type="text"
          v-model="customText"
          data-testid="text-input"
          class="border p-2 rounded flex-1"
          placeholder="Digite o texto para copiar..."
        />
        <button
          @click="handleCopy"
          data-testid="copy-button"
          :class="[
            'px-4 py-2 rounded font-medium transition-colors',
            isCopied
              ? 'bg-green-700 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700',
          ]"
        >
          {{ isCopied ? 'Copiado!' : 'Copiar' }}
        </button>
      </div>

      <div
        v-if="copiedValue"
        class="p-3 bg-green-50 border border-green-200 rounded text-sm"
        data-testid="copied-value-display"
      >
        <strong>Texto copiado:</strong> <code>{{ copiedValue }}</code>
      </div>

      <button
        v-if="isCopied"
        @click="reset"
        data-testid="reset-button"
        class="text-sm text-gray-500 hover:text-gray-700 underline self-start"
      >
        Resetar estado
      </button>
    </div>
  </div>
</template>
