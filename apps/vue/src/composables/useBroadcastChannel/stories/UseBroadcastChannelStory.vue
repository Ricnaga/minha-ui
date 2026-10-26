<script setup lang="ts">
import { ref } from 'vue';
import { useBroadcastChannel } from '../';

const message = ref('');
const received = ref('');
const { post } = useBroadcastChannel<string>('storybook-bc', (data) => {
  received.value = data;
});

const send = () => {
  post(message.value);
};
</script>

<template>
  <div class="p-10 flex flex-col gap-4 w-[400px]">
    <h3 class="text-lg font-semibold">useBroadcastChannel</h3>
    <input
      v-model="message"
      data-testid="message-input"
      class="border p-2 rounded"
      placeholder="Digite uma mensagem..."
    />
    <button
      @click="send"
      data-testid="send-button"
      class="px-4 py-2 rounded bg-blue-600 text-white"
    >
      Enviar
    </button>
    <p>
      <strong>Recebido:</strong>
      <span data-testid="received">{{ received }}</span>
    </p>
  </div>
</template>
