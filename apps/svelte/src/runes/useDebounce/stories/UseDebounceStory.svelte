<script lang="ts">
  import { useDebounce } from '../';

  let value = $state('');
  const debounced = useDebounce(value, 800);
</script>

<div class="p-10 w-[400px] flex flex-col gap-4">
  <p class="text-sm text-neutral-700">
    Digite no input. O valor <strong>debounced</strong> só atualiza após
    800ms sem digitação.
  </p>

  <input
    class="border p-2 rounded"
    placeholder="Digite algo..."
    bind:value
  />

  <div class="mt-4 flex flex-col gap-2 text-sm">
    <p>
      <strong>Valor atual:</strong>
      <span class="text-blue-600">{value || '—'}</span>
    </p>

    <p>
      <strong>Valor debounced:</strong>
      <span data-testid="debounced-value" class="text-green-700">
        {debounced.value || '—'}
      </span>
    </p>
  </div>
</div>
