<script lang="ts">
  import { useBroadcastChannel } from '../';

  let message = $state('');
  let received = $state('');
  const { post } = useBroadcastChannel<string>('storybook-bc', (data) => {
    received = data;
  });

  const send = () => {
    post(message);
  };
</script>

<div class="p-10 flex flex-col gap-4 w-[400px]">
  <h3 class="text-lg font-semibold">useBroadcastChannel</h3>
  <input
    bind:value={message}
    data-testid="message-input"
    class="border p-2 rounded"
    placeholder="Digite uma mensagem..."
  />
  <button
    onclick={send}
    data-testid="send-button"
    class="px-4 py-2 rounded bg-blue-600 text-white"
  >
    Enviar
  </button>
  <p>
    <strong>Recebido:</strong>
    <span data-testid="received">{received}</span>
  </p>
</div>
