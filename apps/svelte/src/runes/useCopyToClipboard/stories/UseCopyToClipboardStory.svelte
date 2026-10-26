<script lang="ts">
  import { useCopyToClipboard } from '../';

  const clipboard = useCopyToClipboard();
  let customText = $state('Texto para copiar');

  const handleCopy = async () => {
    await clipboard.copyToClipboard(customText);
  };
</script>

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
        bind:value={customText}
        data-testid="text-input"
        class="border p-2 rounded flex-1"
        placeholder="Digite o texto para copiar..."
      />
      <button
        onclick={handleCopy}
        data-testid="copy-button"
        class={clipboard.isCopied
          ? 'px-4 py-2 rounded font-medium transition-colors bg-green-700 text-white'
          : 'px-4 py-2 rounded font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700'}
      >
        {clipboard.isCopied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>

    {#if clipboard.copiedValue}
      <div
        class="p-3 bg-green-50 border border-green-200 rounded text-sm"
        data-testid="copied-value-display"
      >
        <strong>Texto copiado:</strong> <code>{clipboard.copiedValue}</code>
      </div>
    {/if}

    {#if clipboard.isCopied}
      <button
        onclick={clipboard.reset}
        data-testid="reset-button"
        class="text-sm text-gray-500 hover:text-gray-700 underline self-start"
      >
        Resetar estado
      </button>
    {/if}
  </div>
</div>
